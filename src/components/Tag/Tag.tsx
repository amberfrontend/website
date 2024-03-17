import { ReactNode, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../architecture/ThemeContext/ThemeContext';

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  const theme = useContext(ThemeContext);

  const StyledTag = styled.div`
    border: 0.2rem solid ${theme.TAG.BORDER};
    background: ${theme.TAG.BACKGROUND};
    color: ${theme.TAG.COLOR};
    border-radius: 1rem;
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    flex-basis: auto;
    font-size: 0.8rem;
    font-weight: 800;
  `;

  return <StyledTag>{children}</StyledTag>;
}
