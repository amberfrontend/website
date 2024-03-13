import { ReactNode } from 'react';
import styled from 'styled-components';

import Flex from '../../components/Flex/Flex';

type Colums = 'TWO_HALVES' | 'ONE_THIRD_TWO_THIRDS';

interface LayoutProps {
  columns: Colums;
  left: ReactNode;
  right: ReactNode;
}

export default function Layout({ columns, left, right }: LayoutProps) {
  const StyledLeftColumn = styled.div`
    width: ${columns === 'ONE_THIRD_TWO_THIRDS' ? '35%' : '50%'};
  `;

  const StyledRightColumn = styled.div`
    width: ${columns === 'ONE_THIRD_TWO_THIRDS' ? '65%' : '50%'};
  `;

  return (
    <Flex justifyContent='SPACE_BETWEEN' alignItems='FLEX_START' gap='2rem'>
      <StyledLeftColumn>{left}</StyledLeftColumn>
      <StyledRightColumn>{right}</StyledRightColumn>
    </Flex>
  );
}
