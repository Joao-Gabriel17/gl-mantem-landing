export const WHATSAPP_PRIMARY = "5543984910234";
export const WHATSAPP_SECONDARY = "5543991497628";
export const DEFAULT_WA_MSG =
  "Olá! Vim pelo site da G&L Manutenções e gostaria de um orçamento.";

export function normalizePhone(raw: string) {
  const d = String(raw || "").replace(/\D/g, "");
  const withCc = d.startsWith("55") ? d : `55${d}`;
  return withCc.replace(/^550+/, "55");
}
export function buildWaLink(
  phone = WHATSAPP_PRIMARY,
  message = DEFAULT_WA_MSG,
) {
  const e164 = normalizePhone(phone);
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}
