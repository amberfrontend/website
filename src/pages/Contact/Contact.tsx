import React, { useEffect } from "react";
import { siteName } from "../../assets/strings";
import Link from "../../components/Link/Link";

export default function Contact() {
    const pageName = "Contact";

    useEffect(() => {
        document.title = `${siteName}${pageName}`;
    }, []);

    return (
        <>
            <h1>{pageName}</h1>
            <h2>LinkedIn</h2>
            <p>
                <Link
                    href="https://www.linkedin.com/in/mizamberarmstrong"
                    external
                    type="BODY"
                >
                    mizamberarmstrong
                </Link>
            </p>
        </>
    );
}
