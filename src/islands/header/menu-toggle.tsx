import { MdMenu, MdClose } from 'react-icons/md';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isOpen, onClick }: Props) {
  return (
    <div
      className="text-2xl md:hidden fixed top-5 right-6 z-[60] cursor-pointer text-gray"
      onClick={onClick}
    >
      {isOpen ? <MdClose /> : <MdMenu />}
    </div>
  );
}
