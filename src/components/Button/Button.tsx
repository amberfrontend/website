import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext/ThemeContext";

type ButtonType = "BODY" | "HEADER";

export interface ButtonProps {
    children: string;
    onClick(): void;
    type: ButtonType;
}

export default function Button({ children, onClick, type }: ButtonProps) {
    const themeContext = useContext(ThemeContext);

    const handleOnClick = () => {
        onClick();
    };
    const StyledButton = styled.button`
        background-color: ${themeContext.BUTTON[type].BACKGROUND};
        border: 0.1rem solid ${themeContext.BUTTON[type].BACKGROUND};
        border-radius: 0.2rem;
        color: ${themeContext.BUTTON[type].TEXT};
        cursor: pointer;
        padding: 0.3rem 0.5rem;

        &:hover,
        &:focus {
            outline: 0.2rem solid ${themeContext.BUTTON[type].BACKGROUND};
            outline-offset: 0.2rem;
        }
    `;

    return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
}
