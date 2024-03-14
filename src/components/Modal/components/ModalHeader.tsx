import { useCallback, useId } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Button/Button';
import Flex from '../../Flex/Flex';

interface ModalHeaderProps {
  title?: string | null;
  onClose(): void;
}

export default function ModalHeader({ onClose, title }: ModalHeaderProps) {
  const closeButtonRef = useCallback((element: HTMLButtonElement) => {
    element?.focus();
  }, []);

  const StyledModalHeader = styled.div`
    margin-bottom: 2rem;
  `;

  const closeButtonId = useId();

  return (
    <StyledModalHeader className='ModalHeader'>
      <Flex
        justifyContent='flex-start'
        flexWrap='nowrap'
        alignItems='flex-start'
        gap='2rem'
      >
        <Button
          id={closeButtonId}
          type='HEADER'
          ref={closeButtonRef}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faX} />
        </Button>
        {title && <h1>{title}</h1>}
      </Flex>
    </StyledModalHeader>
  );
}
