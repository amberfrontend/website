import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { COLORS } from '../../styles/theme';

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
      color: ${COLORS.BLACK};
      border-bottom-style: ${type === 'BODY' && 'solid'};
      border-bottom-width: ${type === 'BODY' && '0.2rem'};
      border-bottom-color: ${type === 'BODY' && COLORS.PRIMARY};
      font-weight: 700;
      text-decoration: none;
    }

    a:hover,
    a:active,
    a:focus {
      border-radius: 0.2rem;
      outline: 0.2rem solid ${type === 'HEADER' ? COLORS.BLACK : COLORS.PRIMARY};
      outline-offset: 0.04rem;
      border-bottom: none;
    }

    a:visited {
      color: ${COLORS.BLACK};
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
