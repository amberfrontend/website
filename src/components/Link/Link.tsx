import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { ThemeContext } from '../../architecture/ThemeContext/ThemeContext';

type LinkType = 'body' | 'header';

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
  const theme = useContext(ThemeContext);

  const externalMarkup = external ? (
    <span className='visually-hidden'>Opens in a new window</span>
  ) : null;

  const ariaCurrent = current ? 'page' : false;

  const StyledLinkWrapper = styled.span`
    a,
    a:visited {
      color: ${type === 'body' ? theme.LINK.BODY.TEXT : theme.LINK.HEADER.TEXT};
      border-bottom-style: ${type === 'body' && 'solid'};
      border-bottom-width: ${type === 'body' && '0.2rem'};
      border-bottom-color: ${type === 'body' && theme.LINK.BODY.UNDERLINE};
      font-weight: 700;
      text-decoration: none;
    }

    a:hover,
    a:active,
    a:focus {
      border-radius: 0.2rem;
      outline: 0.2rem solid
        ${type === 'body'
          ? theme.LINK.BODY.UNDERLINE
          : theme.LINK.HEADER.UNDERLINE};
      outline-offset: 0.04rem;
      border-bottom: none;
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
