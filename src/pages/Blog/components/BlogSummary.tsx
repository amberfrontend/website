import * as React from "react";
import Link from "../../../components/Link/Link";

interface BlogSummaryProps {
    date: Date;
    description: string;
    title: string;
    url: string;
}

export default function BlogSummary({
    date,
    description,
    title,
    url,
}: BlogSummaryProps) {
    return (
        <div>
            <h2>
                <Link href={url} type="BODY">
                    {title}
                </Link>
            </h2>
            <span>{`${date.getMonth()} ${
                date.getDay
            }, ${date.getFullYear()}`}</span>
            <div>{description}</div>
        </div>
    );
}
