import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { THEME_LIGHT } from '../../styles/theme';

type LinkType = 'BODY' | 'HEADER';

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  current?: boolean;
  external?: boolean;
  href: string;
  skip?: boolean;
  type: LinkType;
  onClick?(): void;
}

export default function Link({
  children,
  className,
  current,
  external = false,
  href,
  type,
  onClick,
}: LinkProps) {
  const externalMarkup = external ? (
    <span className='visually-hidden'>Opens in a new window</span>
  ) : null;

  const ariaCurrent = current ? 'page' : false;

  const StyledLinkWrapper = styled.span`
    a {
      color: ${type === 'HEADER'
        ? THEME_LIGHT.LINK.HEADER
        : THEME_LIGHT.LINK.BODY};
      font-weight: 700;
      text-decoration: none;
      border-radius: 0.2rem;
    }

    a:hover,
    a:active,
    a:focus {
      outline: 0.1rem solid;
    }
  `;

  return (
    <StyledLinkWrapper>
      <RouterLink
        to={href}
        className={className}
        aria-current={ariaCurrent}
        target={external ? '_blank' : '_self'}
        rel='noreferrer'
        onClick={onClick}
      >
        {children}
        {externalMarkup}
      </RouterLink>
    </StyledLinkWrapper>
  );
}
