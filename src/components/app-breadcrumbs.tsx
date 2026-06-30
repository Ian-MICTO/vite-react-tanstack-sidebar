import type { ReactNode } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useMatches } from "@tanstack/react-router";
import React from "react";
import type { BreadCrumbItem } from "@/types/breadcrumb";

/** Current page segment shown in the header — pass a nav item or `{ title, icon? }`. */
// export type AppBreadcrumbPage = {
//     title: string;
//     icon?: ReactNode;
// };

export function AppBreadcrumbs({ breadcrumbs }: { breadcrumbs?: string }) {

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbMatches.map((match, index) => {
                    const isLast = index === breadcrumbMatches.length - 1

                    const staticLabel = match.staticData?.breadcrumb?.title

                    const fallbackLabel = match.pathname
                        .split('/')
                        .pop()
                        ?.replace(/[-_]/g, ' ')
                        .replace(/\b\w/g, (char) => char.toUpperCase())

                    const label = staticLabel || fallbackLabel

                    return (
                        <React.Fragment key={match.id}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (<BreadcrumbPage>{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={match.pathname}>{label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
                {/* <BreadcrumbPage className="flex items-center gap-2 [&>svg]:size-3.5">
                        {page.icon}
                        {page.title}
                    </BreadcrumbPage> */}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
