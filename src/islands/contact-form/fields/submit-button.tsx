interface Props {
  loading?: boolean;
  label?: string;
  loadingLabel?: string;
}

export function SubmitButton({ loading, label = 'Enviar mensaje', loadingLabel = 'Enviando...' }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full h-14 rounded-[28px] bg-[var(--brand-primary)] text-white text-[16px] font-semibold cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {loading ? loadingLabel : label}
    </button>
  );
}
