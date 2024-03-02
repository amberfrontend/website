import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import "./Navigation.css";

interface NavigationProps {
  themeToggleButton: React.ReactNode;
}

export default function Navigation({ themeToggleButton }: NavigationProps) {
  const themeContext = useContext(ThemeContext);

  const StyledNavLink = styled.div`
    a {
      border-radius: 0.2rem;
      color: ${themeContext.LINK.HEADER};
    }
  `;

  const StyledLeftLetter = styled.span`
    color: ${themeContext.TEXT.LOGO};
  `;

  return (
    <nav aria-label="main" className="NavMain">
      <ul>
        <li>
          <StyledNavLink className="NavLink NavAbout Logo">
            <Link to="/" type="HEADER">
              <div className="LogoWrapper">
                <StyledLeftLetter className="LeftLetter">A</StyledLeftLetter>
                <span aria-hidden={true}>/</span>
                <span className="RightLetter">A</span>
              </div>
            </Link>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="NavLink NavAbout">
            <Link to="/about" type="HEADER">
              About
            </Link>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink className="NavLink NavExperience">
            <Link to="/qualifications" type="HEADER">
              Qualifications
            </Link>
          </StyledNavLink>
        </li>
        {/* 
                <li>
                    <div className="NavLink NavBlog">
                        <Link to="/blog">Blog</Link>
                    </div>
                </li> */}
        <li>
          <StyledNavLink className="NavLink NavContact">
            <Link to="/contact" type="HEADER">
              Contact
            </Link>
          </StyledNavLink>
        </li>
        <li>{themeToggleButton}</li>
      </ul>
    </nav>
  );
}

// &:focus,
//         &:hover {
//             outline: 0.2rem dotted ${themeContext.PRIMARY};
//         }
