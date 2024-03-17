import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function Footer() {
  const theme = useContext(ThemeContext);

  const StyledFooter = styled.footer`
    background: ${theme.BACKGROUND.FOOTER};
  `;

  return <StyledFooter> &nbsp; </StyledFooter>;
}
