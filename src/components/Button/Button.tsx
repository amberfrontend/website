import { forwardRef, ReactNode, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../architecture/ThemeContext/ThemeContext';

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
    const theme = useContext(ThemeContext);

    const StyledButton = styled.button`
      background: ${type === 'body'
        ? theme.BUTTON.BODY.BACKGROUND
        : theme.BUTTON.HEADER.BACKGROUND};
      color: ${type === 'body'
        ? theme.BUTTON.BODY.TEXT
        : theme.BUTTON.HEADER.TEXT};
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
          ${type === 'body'
            ? theme.BUTTON.BODY.OUTLINE
            : theme.BUTTON.HEADER.OUTLINE};
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
