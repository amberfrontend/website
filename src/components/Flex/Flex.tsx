import { ReactNode } from 'react';
import styled from 'styled-components';

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type FlexDirection = 'column' | 'row';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type Gap = '0.25rem' | '0.5rem' | '0.75rem' | '1rem' | '2rem';

interface FlexProps {
  alignItems?: AlignItems;
  children: ReactNode;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  gap?: Gap;
  justifyContent?: JustifyContent;
}

export default function Flex({
  alignItems,
  children,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
}: FlexProps) {
  const StyledFlex = styled.div`
    display: flex;
    align-items: ${alignItems || null};
    flex-direction: ${flexDirection || null};
    flex-wrap: ${flexWrap || null};
    gap: ${gap || null};
    justify-content: ${justifyContent || null};
  `;

  return <StyledFlex>{children}</StyledFlex>;
}
