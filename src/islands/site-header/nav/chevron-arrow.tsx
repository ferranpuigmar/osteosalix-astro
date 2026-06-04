import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  isOpen?: boolean;
  scrolled?: boolean;
}

export function ChevronArrow({ isOpen, scrolled }: Props) {
  return (
    <MdKeyboardArrowDown
      className={`transition-transform duration-300 text-xl ${isOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray' : 'text-white'}`}
    />
  );
}
