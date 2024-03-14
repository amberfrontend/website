import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  wrapperId: string;
}

export default function Portal({
  children,
  wrapperId = 'portal-wrapper',
}: PortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  const createWrapper = (wrapperId: string) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);

    return wrapperElement;
  };

  useLayoutEffect(() => {
    let wrapperElement = document.getElementById(wrapperId);
    if (!wrapperElement) wrapperElement = createWrapper(wrapperId);

    setWrapperElement(wrapperElement);
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(
    children,
    document.getElementById(wrapperId) as HTMLDivElement,
  );
}
