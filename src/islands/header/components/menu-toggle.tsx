import { MdMenu, MdClose } from 'react-icons/md';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isOpen, onClick }: Props) {
  return (
    <div
      className="text-2xl lg:hidden fixed top-[18px] right-5 z-[60] cursor-pointer text-brand-primary"
      onClick={onClick}
    >
      {isOpen ? <MdClose /> : <MdMenu />}
    </div>
  );
}
