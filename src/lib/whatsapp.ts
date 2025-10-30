export function normalizePhone(raw: string): string {
  const d = raw.replace(/\D/g, "");
  const withCc = d.startsWith("55") ? d : `55${d}`;
  return withCc.replace(/^550+/, "55");
}

export function buildWhatsAppLink(phone: string, message?: string) {
  const e164 = normalizePhone(phone);
  const base = `https://wa.me/${e164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PRIMARY = "5543984910234";
export const WHATSAPP_SECONDARY = "5543991497628";

export const DEFAULT_WA_MSG = "Olá! Vim pelo site da G&L Manutenções e gostaria de um orçamento.";
