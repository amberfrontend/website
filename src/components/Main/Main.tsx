import React, { useContext } from "react";
import styled from "styled-components";

import "./Main.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";

interface MainProps {
    children: React.ReactNode;
    className?: string;
}

export default function Main({ children, className }: MainProps) {
    const themeContext = useContext(ThemeContext);

    const StyledMainWrapper = styled.div`
        background-color: ${themeContext.BACKGROUND.BODY};
        color: ${themeContext.TEXT.BODY};
        min-height: calc(100vh - 9rem);
    `;

    const StyledMain = styled.main`
        position: relative;

        &:focus {
            outline: none;
        }
    `;

    return (
        <StyledMainWrapper className="MainWrapper">
            <StyledMain className={className} tabIndex={-1}>
                {children}
            </StyledMain>
        </StyledMainWrapper>
    );
}
