import * as React from "react";
import "./Main.css";

interface MainProps {
    children: React.ReactNode;
    className?: string;
}

export default function Main({ children, className }: MainProps) {
    return (
        <div className="MainWrapper">
            <main className={className}>{children}</main>
        </div>
    );
}
