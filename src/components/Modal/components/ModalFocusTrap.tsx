import { ReactNode, useEffect } from 'react';

interface ModalFocusTrapProps {
  children: ReactNode;
  id: string;
}

export default function ModalFocusTrap({ children, id }: ModalFocusTrapProps) {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const wrapper = document.getElementById(id);
      const actionableNodes = wrapper?.querySelectorAll('a,button,input');

      const actionableElements = [] as HTMLElement[];

      if (actionableNodes) {
        for (let i = 0; i < actionableNodes?.length; i++) {
          actionableElements.push(actionableNodes[i] as HTMLElement);
        }
      }

      if (event.key === 'Tab') {
        if (event.shiftKey === true && actionableElements[0] === event.target) {
          actionableElements[actionableElements.length - 1].focus();
          event.preventDefault();
        } else if (
          event.shiftKey === false &&
          actionableElements[actionableElements.length - 1] === event.target
        ) {
          actionableElements[0].focus();
          event.preventDefault();
        }
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });

  return children;
}
