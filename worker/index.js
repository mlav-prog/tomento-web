import { EmailMessage } from "cloudflare:email";

const allowedOrigins = new Set([
  "https://tomentocapilar.com.ar",
  "https://www.tomentocapilar.com.ar",
]);

const zoneImages = {
  "Línea frontal": "https://tomentocapilar.com.ar/images/content/zone-linea-frontal.webp",
  "Entradas": "https://tomentocapilar.com.ar/images/content/zone-entradas.webp",
  "Zona media": "https://tomentocapilar.com.ar/images/content/zone-media.webp",
  "Coronilla": "https://tomentocapilar.com.ar/images/content/zone-coronilla.webp",
  "Zona donante": "https://tomentocapilar.com.ar/images/content/zone-donante.webp",
};

const worker = {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") ?? "";
    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigins.has(origin) ? origin : "https://tomentocapilar.com.ar",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Vary": "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: allowedOrigins.has(origin) ? 204 : 403, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/api/consulta") {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }

    if (!allowedOrigins.has(origin)) {
      return Response.json({ ok: false, error: "Origin not allowed" }, { status: 403, headers: corsHeaders });
    }

    const contentLength = Number(request.headers.get("Content-Length") ?? 0);
    if (contentLength > 4_500_000) {
      return Response.json({ ok: false, error: "Payload too large" }, { status: 413, headers: corsHeaders });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400, headers: corsHeaders });
    }

    if (data.website) return Response.json({ ok: true }, { headers: corsHeaders });

    const required = ["fullName", "birthDate", "phone", "email", "city", "priorSurgery", "stable", "expectation"];
    if (required.some((field) => !clean(data[field]))) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400, headers: corsHeaders });
    }

    if (!data.consent || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return Response.json({ ok: false, error: "Invalid consent or email" }, { status: 400, headers: corsHeaders });
    }

    const photoError = validatePhotos(data.photos);
    if (photoError) {
      return Response.json({ ok: false, error: photoError }, { status: 400, headers: corsHeaders });
    }

    const text = buildText(data);
    const html = buildHtml(data);

    try {
      const message = new EmailMessage(
        env.EMAIL_FROM,
        env.EMAIL_TO,
        buildMimeMessage(data, text, html, env),
      );
      await env.EMAIL.send(message);
      return Response.json({ ok: true }, { headers: corsHeaders });
    } catch (error) {
      console.error("Email send failed", error);
      return Response.json({ ok: false, error: "Email delivery failed" }, { status: 502, headers: corsHeaders });
    }
  },
};

export default worker;

function clean(value) {
  return String(value ?? "").trim().slice(0, 2000);
}

function list(value) {
  return Array.isArray(value) && value.length ? value.map(clean).join(", ") : "No informado";
}

function buildRows(data) {
  return [
    ["Paciente", data.fullName],
    ["Fecha de nacimiento", data.birthDate],
    ["Teléfono", data.phone],
    ["Email", data.email],
    ["Ciudad", data.city],
    ["Cómo conoció Tomento", data.referral || "No informado"],
    ["Cirugías previas", data.priorSurgery],
    ["Detalle de cirugías", data.surgeryDetails || "No informado"],
    ["Tratamientos actuales", list(data.medication)],
    ["Caída estable", data.stable],
    ["Objetivo principal", data.expectation],
    ["Zonas indicadas", list(data.zones)],
    ["Comentarios", data.comments || "Sin comentarios adicionales"],
  ].map(([label, value]) => [label, clean(value)]);
}

function buildText(data) {
  return [
    "NUEVA CONSULTA CAPILAR ONLINE",
    "",
    ...buildRows(data).map(([label, value]) => `${label}: ${value}`),
    `Fotografías adjuntas: ${data.photos.length}`,
    "",
    "La persona autorizó el uso de estos datos para evaluar su consulta y ser contactada.",
  ].join("\n");
}

function buildHtml(data) {
  const rows = buildRows(data).map(([label, value]) => `<tr><td style="padding:8px 12px;color:#6f6a61;border-bottom:1px solid #e8e3da">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#203121;border-bottom:1px solid #e8e3da"><strong>${escapeHtml(value)}</strong></td></tr>`).join("");
  const selectedZones = Array.isArray(data.zones) ? data.zones.filter((zone) => zoneImages[zone]) : [];
  const zoneCards = selectedZones.map((zone) => `<td style="width:150px;padding:7px;vertical-align:top"><div style="overflow:hidden;border:1px solid #e3ded5;border-radius:10px;background:#fff"><img src="${zoneImages[zone]}" alt="${escapeHtml(zone)}" width="150" height="150" style="display:block;width:100%;height:auto"><div style="padding:9px;color:#203121;font-size:12px;font-weight:bold;text-align:center">${escapeHtml(zone)}</div></div></td>`).join("");
  const zonesSection = zoneCards ? `<div style="padding:22px 12px;background:#f3f0e9"><h2 style="margin:0 0 12px;font-size:17px">Zonas seleccionadas</h2><table role="presentation" style="border-collapse:collapse"><tr>${zoneCards}</tr></table><p style="margin:10px 0 0;color:#6f6a61;font-size:11px">Si las imágenes no se muestran, las zonas también figuran en el detalle superior.</p></div>` : "";
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#203121"><div style="padding:24px;background:#203121;color:#fff"><div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:.7">Tomento Capilar</div><h1 style="margin:8px 0 0;font-size:24px">Nueva consulta online</h1></div><table style="width:100%;border-collapse:collapse;background:#faf9f6">${rows}</table>${zonesSection}<p style="padding:18px 12px;color:#6f6a61;font-size:12px;line-height:1.5">La persona autorizó el uso de estos datos y fotografías para evaluar su consulta y ser contactada.</p></div>`;
}

function buildMimeMessage(data, text, html, env) {
  const mixedBoundary = "tomento-consulta-mixed";
  const alternativeBoundary = "tomento-consulta-content";
  const replyTo = clean(data.email).replace(/[\r\n]/g, "");
  const message = [
    `From: Tomento Capilar <${env.EMAIL_FROM}>`,
    `To: ${env.EMAIL_TO}`,
    `Reply-To: ${replyTo}`,
    "Subject: Nueva consulta capilar online",
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary=\"${mixedBoundary}\"`,
    "",
    `--${mixedBoundary}`,
    `Content-Type: multipart/alternative; boundary=\"${alternativeBoundary}\"`,
    "",
    `--${alternativeBoundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    "",
    `--${alternativeBoundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    "",
    `--${alternativeBoundary}--`,
    "",
  ];

  for (const photo of data.photos) {
    const filename = clean(photo.name).replace(/[^a-zA-Z0-9._-]/g, "_");
    message.push(
      `--${mixedBoundary}`,
      `Content-Type: image/jpeg; name=\"${filename}\"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename=\"${filename}\"`,
      "",
      wrapBase64(photo.data),
      "",
    );
  }

  message.push(`--${mixedBoundary}--`, "");
  return message.join("\r\n");
}

function validatePhotos(photos) {
  if (!Array.isArray(photos) || photos.length !== 6) return "Six photos are required";
  let totalBase64Size = 0;
  for (const photo of photos) {
    if (!photo || photo.type !== "image/jpeg" || !/^[a-zA-Z0-9._-]+\.jpg$/.test(String(photo.name ?? ""))) return "Invalid photo";
    if (!Number.isFinite(photo.size) || photo.size < 1 || photo.size > 600_000) return "Photo too large";
    if (typeof photo.data !== "string" || !/^[A-Za-z0-9+/]+={0,2}$/.test(photo.data)) return "Invalid photo data";
    totalBase64Size += photo.data.length;
  }
  if (totalBase64Size > 4_000_000) return "Photos too large";
  return "";
}

function wrapBase64(value) {
  return value.match(/.{1,76}/g)?.join("\r\n") ?? "";
}

function escapeHtml(value) {
  return clean(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

