import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeContext/ThemeContext';

import './Header.css';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  const theme = useContext(ThemeContext);

  const StyledHeader = styled.header`
    background: ${theme.BACKGROUND.HEADER};
  `;

  return <StyledHeader className={className}>{children}</StyledHeader>;
}
