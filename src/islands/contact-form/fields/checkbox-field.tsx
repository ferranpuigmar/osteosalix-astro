import type { UseFormRegisterReturn } from 'react-hook-form';
import type { ReactNode } from 'react';

interface Props {
  registration: UseFormRegisterReturn;
  error?: string;
  children: ReactNode;
}

export function CheckboxField({ registration, error, children }: Props) {
  return (
    <div className="mb-5 md:mb-0">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...registration} className="w-4 h-4 accent-primary-main" />
        <span className="text-sm">{children}</span>
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
