import type { SubmitStatus } from '../types';

interface Props {
  status: SubmitStatus;
  successMessage?: string;
  errorMessage?: string;
}

export function FormStatus({
  status,
  successMessage = 'El mensaje se ha enviado correctamente, en breve nos pondremos en contacto contigo',
  errorMessage = 'Ha ocurrido un error, por favor, vuelve a intentarlo',
}: Props) {
  if (status === 'idle') return null;

  return (
    <div
      className={`col-span-3 p-5 mt-3 w-full text-white rounded text-center text-sm ${
        status === 'success' ? 'bg-green-600/60' : 'bg-red-600/60'
      }`}
    >
      {status === 'success' ? successMessage : errorMessage}
    </div>
  );
}
