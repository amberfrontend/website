import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext/ThemeContext";

type LinkType = "BODY" | "HEADER";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  current?: boolean;
  external?: boolean;
  href: string;
  skip?: boolean;
  type: LinkType;
}

export default function Link({
  children,
  className,
  current,
  external = false,
  href,
  type,
}: LinkProps) {
  const themeContext = useContext(ThemeContext);

  const externalMarkup = external ? (
    <span className="visually-hidden">Opens in a new window</span>
  ) : null;

  const StyledLink = styled.a`
    border-radius: 0.2rem;
    color: ${themeContext.LINK[type]};
    font-weight: bold;

    &:focus,
    &:hover {
      outline: 0.2rem solid ${themeContext.LINK[type]};
      outline-offset: 0.2rem;
      text-decoration: none;
    }
  `;

  const ariaCurrent = current ? "page" : false;

  return (
    <StyledLink
      href={href}
      className={className}
      aria-current={ariaCurrent}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      {externalMarkup}
    </StyledLink>
  );
}
