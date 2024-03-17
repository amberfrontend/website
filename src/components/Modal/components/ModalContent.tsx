import { ReactNode } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../../styles/theme';

import ModalHeader from './ModalHeader';
import ModalFocusTrap from './ModalFocusTrap';

interface ModalContentProps {
  children: ReactNode;
  isNav?: boolean;
  title?: string;
  onClose(): void;
}

export default function ModalContent({
  children,
  isNav,
  title,
  onClose,
}: ModalContentProps) {
  const StyledModal = styled.div`
    background: ${COLORS.WHITE};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;

    h1 {
      margin-block-end: 0;
    }
  `;

  return (
    <ModalFocusTrap>
      <StyledModal
        aria-label={title}
        aria-modal='true'
        role='dialog'
        className='ModalContainer'
      >
        <ModalHeader title={isNav ? null : title} onClose={onClose} />
        {children}
      </StyledModal>
    </ModalFocusTrap>
  );
}
