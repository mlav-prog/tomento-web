export const TREATMENT_SELECTION_EVENT = "tomento:treatment-selection";

export function selectTreatmentForContact(treatment) {
  window.dispatchEvent(
    new CustomEvent(TREATMENT_SELECTION_EVENT, { detail: { treatment } }),
  );
}
