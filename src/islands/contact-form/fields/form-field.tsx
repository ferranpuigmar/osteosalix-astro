import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label: string;
  type: 'text' | 'email' | 'tel';
  registration: UseFormRegisterReturn;
  error?: string;
  placeholder: string;
}

export function FormField({ label, type, registration, error, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label className="text-body-xs font-[500] text-[var(--neutral-600)]">{label}</label>
      <input
        {...registration}
        type={type}
        placeholder={placeholder}
        className="h-[52px] rounded-xl bg-[#F7F5F2] px-[18px] text-[16px] text-[var(--text-primary)] placeholder:text-[#A5A19A] outline-none transition-shadow focus:ring-2 focus:ring-[var(--brand-primary)]/20"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
