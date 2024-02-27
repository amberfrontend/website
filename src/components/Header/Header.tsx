import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "./Header.scss";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  const themeContext = useContext(ThemeContext);

  const StyledHeader = styled.header`
    background: ${themeContext.BACKGROUND.HEADER};
    color: ${themeContext.TEXT.HEADER};
    box-shadow: 0 0 0 0.0625rem ${themeContext.BORDER.HEADER};
    border-bottom: 0.0625rem solid ${themeContext.SHADOW.HEADER};
  `;

  return <StyledHeader className={className}>{children}</StyledHeader>;
}
