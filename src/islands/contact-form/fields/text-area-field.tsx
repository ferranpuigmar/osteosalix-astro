import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label: string;
  registration: UseFormRegisterReturn;
  placeholder: string;
}

export function TextAreaField({ label, registration, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label className="text-body-xs font-[500] text-[var(--neutral-600)]">{label}</label>
      <textarea
        {...registration}
        placeholder={placeholder}
        className="min-h-[120px] rounded-xl bg-[#F7F5F2] p-[18px] text-[16px] text-[var(--text-primary)] placeholder:text-[#A5A19A] outline-none resize-y transition-shadow focus:ring-2 focus:ring-[var(--brand-primary)]/20"
      ></textarea>
    </div>
  );
}
