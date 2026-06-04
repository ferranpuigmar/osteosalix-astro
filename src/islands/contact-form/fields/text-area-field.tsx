import type { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label: string;
  registration: UseFormRegisterReturn;
  value: string;
}

export function TextAreaField({ label, registration, value }: Props) {
  const isDirty = value && value.length > 0;

  return (
    <div className="col-span-3 flex flex-col justify-center self-start">
      <div className="relative rounded-sm overflow-hidden bg-white" style={{ minHeight: '136px' }}>
        <label
          className={`absolute left-3 z-[1] pointer-events-none flex items-center transition-all duration-200 ease-linear opacity-70 ${
            isDirty
              ? 'top-[20px] text-xs'
              : 'top-[28px]'
          }`}
        >
          {label}
        </label>
        <textarea
          {...registration}
          className={`absolute inset-0 p-3 w-full resize-y ${isDirty ? 'pt-9' : 'pt-8'}`}
        ></textarea>
      </div>
    </div>
  );
}
