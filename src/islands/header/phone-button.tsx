import { siteConfig } from '@/data/site-config';

export function PhoneButton() {
  const phone = siteConfig.phone;
  const digits = phone.match(/.{3}(?=..)|.+/g) ?? [phone];

  return (
    <a
      href={`tel:${phone}`}
      className="ml-3 px-4 py-2 rounded-full text-sm transition-colors duration-300 bg-primary-main text-white hover:bg-primary-dark"
    >
      {digits.map((d, i) => (
        <span key={i} className="px-0.5">{d}</span>
      ))}
    </a>
  );
}
