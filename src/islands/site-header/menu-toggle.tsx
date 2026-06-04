interface Props {
  isOpen: boolean;
  onClick: () => void;
  scrolled: boolean;
}

export function MenuToggle({ isOpen, onClick, scrolled }: Props) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      <span className={`block w-6 h-[2px] transition-transform duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
      <span className={`block w-6 h-[2px] transition-opacity duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`block w-6 h-[2px] transition-transform duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
    </button>
  );
}
