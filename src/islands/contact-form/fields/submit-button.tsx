interface Props {
  loading?: boolean;
  label?: string;
  loadingLabel?: string;
}

export function SubmitButton({ loading, label = 'Enviar', loadingLabel = 'Enviando...' }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="p-3 px-12 text-xl rounded-full tracking-wider font-[mobile-sans] cursor-pointer no-underline bg-white text-primary-dark hover:text-primary-dark-hover disabled:opacity-50"
    >
      {loading ? loadingLabel : label}
    </button>
  );
}
