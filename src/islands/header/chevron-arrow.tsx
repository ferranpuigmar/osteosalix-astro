import { MdKeyboardArrowDown } from 'react-icons/md';
import type { ReactElement } from 'react';

interface Props {
  isOpen?: boolean;
}

export function ChevronArrow({ isOpen }: Props): ReactElement {
  return (
    <MdKeyboardArrowDown
      className={`transition-all duration-300 text-xl ${isOpen ? 'rotate-180' : ''} text-gray`}
    />
  );
}
