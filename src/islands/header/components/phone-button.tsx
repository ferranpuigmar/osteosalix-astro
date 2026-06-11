import { siteConfig } from '@/data/site-config';
import { LuMessageCircle } from 'react-icons/lu';

interface Props {
  whatsappNumber: string;
}

export function PhoneButton({ whatsappNumber }: Props) {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-brand-primary text-white no-underline transition-opacity hover:opacity-90"
    >
      <LuMessageCircle className="size-[18px]" />
      Pedir cita
    </a>
  );
}
