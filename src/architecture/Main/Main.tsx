import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeContext/ThemeContext';

import './Main.css';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: MainProps) {
  const theme = useContext(ThemeContext);

  const StyledMain = styled.main`
    background: ${theme.BACKGROUND.BODY};
    color: ${theme.TEXT.BODY};
    padding-bottom: 2rem;
  `;

  return <StyledMain className={className}>{children}</StyledMain>;
}
