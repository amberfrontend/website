import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../styles/theme';

export type ButtonType = 'body' | 'header';

interface ButtonProps {
  ariaLabel?: string | undefined;
  children: ReactNode;
  className?: string;
  id?: string;
  onClick(): void;
  type: ButtonType;
}

export type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ ariaLabel = undefined, children, className, id, type, onClick }, ref) => {
    const StyledButton = styled.button`
      background: ${type === 'body' ? COLORS.PRIMARY : COLORS.NEAR_BLACK};
      color: ${COLORS.WHITE};
      cursor: pointer;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 0.25rem;
      border: none;
      padding: 0.3rem 0.5rem;

      &:focus,
      &:active,
      &:hover {
        outline: 0.15rem solid
          ${type === 'body' ? COLORS.PRIMARY : COLORS.NEAR_BLACK};
        outline-offset: 0.1rem;
      }
    `;

    const handleOnClick = () => {
      onClick();
    };

    return (
      <StyledButton
        aria-label={ariaLabel}
        className={className}
        id={id}
        title={ariaLabel}
        ref={ref}
        onClick={handleOnClick}
      >
        {children}
      </StyledButton>
    );
  },
);

export default Button;
