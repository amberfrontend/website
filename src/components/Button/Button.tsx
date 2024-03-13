import { ReactNode } from 'react';

type ButtonType = 'BODY' | 'HEADER';

export interface ButtonProps {
  ariaLabel?: string | undefined;
  children: ReactNode;
  className?: string;
  id?: string;
  onClick(): void;
  type: ButtonType;
}

export default function Button({
  ariaLabel = undefined,
  children,
  className,
  id,
  onClick,
}: // type,
ButtonProps) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      aria-label={ariaLabel}
      className={className}
      id={id}
      onClick={handleOnClick}
      title={ariaLabel}
    >
      {children}
    </button>
  );
}
