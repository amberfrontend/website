import { ReactNode, RefObject, useEffect, useRef } from 'react';

interface ModalFocusTrapProps {
  children: ReactNode;
}

export default function ModalFocusTrap({ children }: ModalFocusTrapProps) {
  const modalFocusTrapRef = useRef(null) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (modalFocusTrapRef && modalFocusTrapRef.current) {
        const actionableNodes =
          modalFocusTrapRef.current.querySelectorAll('a,button,input');

        const actionableElements = [] as HTMLElement[];

        if (actionableNodes) {
          for (let i = 0; i < actionableNodes?.length; i++) {
            actionableElements.push(actionableNodes[i] as HTMLElement);
          }
        }

        if (event.key === 'Tab') {
          if (
            event.shiftKey === true &&
            actionableElements[0] === event.target
          ) {
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
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });

  return <div ref={modalFocusTrapRef}>{children}</div>;
}
