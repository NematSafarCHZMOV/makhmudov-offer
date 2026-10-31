import { buildWhatsAppUrl, TierId } from "@/config/offer-config";

interface WhatsAppLinkProps {
  tier?: TierId;
  className?: string;
  children: React.ReactNode;
}

// Seçilmiş səviyyə ilə hazır WhatsApp mesajı açır
export function WhatsAppLink({ tier, className, children }: WhatsAppLinkProps) {
  return (
    <a href={buildWhatsAppUrl(tier)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
