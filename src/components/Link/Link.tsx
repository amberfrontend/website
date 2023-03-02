import * as React from "react";
import "./Link.css";

interface LinkProps {
    children: React.ReactNode;
    className?: string;
    external?: boolean;
    href: string;
}

export default function Link({
    children,
    className,
    external = false,
    href,
}: LinkProps) {
    const externalMarkup = external ? (
        <span className="visually-hidden">Opens in a new window</span>
    ) : null;

    return (
        <a href={href} className={className} target="_blank" rel="noreferrer">
            {children}
            {externalMarkup}
        </a>
    );
}
