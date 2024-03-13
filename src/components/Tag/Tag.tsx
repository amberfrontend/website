import { ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  const StyledTag = styled.div`
    border: 0.2rem solid ${COLORS.NEAR_BLACK};
    background: ${COLORS.GREY01};
    color: ${COLORS.NEAR_BLACK};
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
