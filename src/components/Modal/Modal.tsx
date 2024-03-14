import { ReactNode, useEffect, useState, useCallback, useId } from 'react';
import classNames from 'classnames';

import Portal from '../Portal/Portal';
import Button, { ButtonType } from '../Button/Button';

import ModalContent from './components/ModalContent';

import './Modal.css';

export interface TriggerButtonType {
  children: ReactNode;
  type: ButtonType;
}

interface ModalProps {
  children: ReactNode;
  isNav?: boolean;
  title: string;
  triggerButton: TriggerButtonType;
}

export default function Modal({
  children,
  isNav,
  title,
  triggerButton,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
    } else {
      document.body.removeAttribute('style');
    }
  }, [isOpen]);

  const triggerButtonRef = useCallback(
    (element: HTMLButtonElement) => {
      if (element && !isOpen) element.focus();
    },
    [isOpen],
  );

  const portalId = useId();

  return (
    <>
      <Button
        ariaLabel={isOpen ? 'Close' : 'Open'}
        type={triggerButton.type}
        ref={triggerButtonRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {triggerButton.children}
      </Button>
      <Portal wrapperId={portalId}>
        <div className={classNames('ModalOuterContainer', { Open: isOpen })}>
          {isOpen && (
            <ModalContent
              isNav={isNav}
              title={title}
              onClose={() => setIsOpen(!isOpen)}
            >
              {children}
            </ModalContent>
          )}
        </div>
      </Portal>
    </>
  );
}
