import type { UseFormRegisterReturn, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import type { ReactNode } from 'react';

interface Props {
  registration: UseFormRegisterReturn;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children: ReactNode;
}

function errorMessage(error: Props['error']): string | undefined {
  if (!error) return undefined;
  if (typeof error === 'string') return error;
  return error.message;
}

export function CheckboxField({ registration, error, children }: Props) {
  const msg = errorMessage(error);
  return (
    <div className="mb-5 md:mb-0">
      <label className="flex items-start pt-3 gap-2 cursor-pointer">
        <input type="checkbox" {...registration} className="w-4 h-4 accent-primary-main" />
        <span className="text-sm">{children}</span>
      </label>
      {msg && <p className="text-red-500 text-xs mt-1">{msg}</p>}
    </div>
  );
}
