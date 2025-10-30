import React from "react";
import { buildWhatsAppLink, WHATSAPP_PRIMARY, DEFAULT_WA_MSG } from "@/lib/whatsapp";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  phone?: string;
  message?: string;
};

export function WhatsAppLink({
  phone = WHATSAPP_PRIMARY,
  message = DEFAULT_WA_MSG,
  children,
  ...props
}: Props) {
  const href = buildWhatsAppLink(phone, message);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics="wa_click"
      {...props}
    >
      {children ?? "Chamar no WhatsApp"}
    </a>
  );
}
