export function createWhatsAppUrl(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
