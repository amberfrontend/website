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
            <h2>Email</h2>
            <p>
                &#104;&#101;&#108;&#108;&#111;&#046;&#097;&#109;&#098;&#101;&#114;&#046;&#097;&#114;&#109;&#115;&#116;&#114;&#111;&#110;&#103;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </p>
            <h2>LinkedIn</h2>
            <p>
                <Link
                    href="https://www.linkedin.com/in/mizamberarmstrong"
                    external
                >
                    mizamberarmstrong
                </Link>
            </p>
            <h2>Twitter</h2>
            <p>
                <Link href="https://twitter.com/amber_a11y" external>
                    @amber_a11y
                </Link>
            </p>
        </>
    );
}
