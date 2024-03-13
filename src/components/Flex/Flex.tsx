import { ReactNode } from 'react';
import styled from 'styled-components';

type AlignItems = 'FLEX_START' | 'FLEX_START' | 'CENTER' | 'STRETCH';
type JustifyContent =
  | 'FLEX_START'
  | 'FLEX_START'
  | 'CENTER'
  | 'SPACE_BETWEEN'
  | 'SPACE_AROUND'
  | 'SPACE_EVENLY';
type FlexWrap = 'WRAP' | 'NO_WRAP' | 'WRAP_REVERSE';
type Gap = '0.25rem' | '0.5rem' | '0.75rem' | '1rem' | '2rem';

interface FlexProps {
  alignItems?: AlignItems;
  children: ReactNode;
  flexWrap?: FlexWrap;
  gap?: Gap;
  justifyContent?: JustifyContent;
}

export default function Flex({
  alignItems,
  children,
  flexWrap,
  gap,
  justifyContent,
}: FlexProps) {
  const StyledFlex = styled.div`
    display: flex;
    align-items: ${alignItems || null};
    flex-wrap: ${flexWrap || null};
    gap: ${gap || null};
    justify-content: ${justifyContent || null};
  `;

  return <StyledFlex>{children}</StyledFlex>;
}
