import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { BreadCrumbItem } from "@/types/breadcrumb";
import { useLocation, useMatches, type LinkOptions } from "@tanstack/react-router";

export type IsCurrentUrlFn = (
    urlToCheck: string,
    startsWith?: boolean,
) => boolean;

export type UseCurrentUrlReturn = {
    currentUrl: string;
    isCurrentUrl: IsCurrentUrlFn;
    breadcrumbs: BreadCrumbItem[];
};

export function useCurrentPath(): UseCurrentUrlReturn {
    // const location = useLocation();
    // const matches = useMatches();

    // const currentPath = location.href;

    // const isCurrentUrl: IsCurrentUrlFn = (
    //     urlToCheck: string,
    //     startsWith = false,
    // ) => {
    //     if (startsWith) {
    //         return currentPath.startsWith(urlToCheck);
    //     }
    //     return currentPath.slice(1) === urlToCheck;
    // }

    // const breadcrumbs: BreadCrumbItem[] = matches.flatMap((match) => {
    //     const matchData = match as any;

    //     // Safely extract staticData from the router matches
    //     const routeBreadcrumbs =
    //         matchData.staticData?.breadcrumb ||
    //         matchData.route?.options?.staticData?.breadcrumb;

    //     if (!Array.isArray(routeBreadcrumbs)) {
    //         return [];
    //     }

    //     return routeBreadcrumbs;
    // });

    // return {
    //     currentUrl: currentPath,
    //     isCurrentUrl: isCurrentUrl,
    //     breadcrumbs: breadcrumbs
    // }
    const location = useLocation();
    const matches = useMatches();

    // Normalize path to get rid of hash layout prefixes for navigation checking
    const currentPath = location.href.replace(/^#/, '');

    const isCurrentUrl: IsCurrentUrlFn = (
        urlToCheck: string,
        startsWith = false,
    ) => {
        const cleanUrlToCheck = urlToCheck.startsWith('/') ? urlToCheck : `/${urlToCheck}`;
        const cleanCurrentPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;

        if (startsWith) {
            return cleanCurrentPath.startsWith(cleanUrlToCheck);
        }
        return cleanCurrentPath === cleanUrlToCheck;
    };

    const breadcrumbs: BreadCrumbItem[] = matches.flatMap((match) => {
        const matchData = match as any;

        // Safely extract breadcrumbs if they exist on the layout match layer
        const routeBreadcrumbs =
            matchData.staticData?.breadcrumb ||
            matchData.route?.options?.staticData?.breadcrumb;

        if (!Array.isArray(routeBreadcrumbs)) {
            return [];
        }

        return routeBreadcrumbs;
    });

    return {
        currentUrl: currentPath,
        isCurrentUrl,
        breadcrumbs,
    };
}