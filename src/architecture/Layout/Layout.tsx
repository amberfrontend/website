import { ReactNode } from 'react';
import styled from 'styled-components';

import useWindowWidth from '../../custom-hooks/useWindowWidth';

import Flex from '../../components/Flex/Flex';

type TwoHalves = {
  left: '50%';
  right: '50%';
};

type ThirdTwoThirds = {
  left: '35%';
  right: '65%';
};

type TwoThirdsThird = {
  left: '65%';
  right: '35%';
};

type Layout = TwoHalves | ThirdTwoThirds | TwoThirdsThird;

interface LayoutProps {
  layout: Layout;
  left: ReactNode;
  right: ReactNode;
}

export default function Layout({ layout, left, right }: LayoutProps) {
  const isMobileWeb = useWindowWidth();

  const StyledLeft = styled.div`
    width: ${layout.left};

    @media (min-width: 1rem) and (max-width: 56rem) {
      width: 100%;
    }
  `;

  const StyledRight = styled.div`
    width: ${layout.right};

    @media (min-width: 1rem) and (max-width: 56rem) {
      width: 100%;
    }
  `;

  return (
    <Flex
      justifyContent='space-between'
      alignItems='flex-start'
      gap='2rem'
      flexDirection={isMobileWeb ? 'column' : 'row'}
    >
      <StyledLeft>{left}</StyledLeft>
      <StyledRight>{right}</StyledRight>
    </Flex>
  );
}
