import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label: string;
  type: 'text' | 'email' | 'tel';
  registration: UseFormRegisterReturn;
  error?: string;
  value: string;
}

export function FormField({ label, type, registration, error, value }: Props) {
  const isDirty = value && value.length > 0;

  return (
    <div className="col-span-3 md:col-span-1 flex flex-col justify-center self-start">
      <div className={`relative rounded-sm overflow-hidden bg-white ${error ? 'text-red-600 border border-red-600' : ''}`}>
        <label
          className={`absolute left-3 z-[1] pointer-events-none flex items-center transition-all duration-200 ease-linear opacity-70 ${
            isDirty
              ? 'top-[19%] text-xs'
              : 'top-1/2 -translate-y-1/2'
          }`}
        >
          {label}
        </label>
        <input
          {...registration}
          type={type}
          className={`p-3 min-h-[68px] w-full ${isDirty ? 'pt-5' : ''}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
