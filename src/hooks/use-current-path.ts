import type { BreadCrumbItem } from "@/types/breadcrumb";
import { useLocation, useMatches, useMatchRoute } from "@tanstack/react-router";

export type IsCurrentUrlFn = (
    pathToCheck: string,
    fuzzy?: boolean,
) => boolean;

export type UseCurrentUrlReturn = {
    currentUrl: string;
    isCurrentPath: IsCurrentUrlFn;
    breadcrumbs: BreadCrumbItem[];
};

export function useCurrentPath(): UseCurrentUrlReturn {
    const location = useLocation();
    const matches = useMatches();
    const matchRoute = useMatchRoute();

    const currentPath = location.href;

    const isCurrentPath: IsCurrentUrlFn = (
        pathToCheck: string,
        fuzzy?: boolean
    ) => {
        // if (fuzzy) {
        //     return currentPath.startsWith(pathToCheck);
        // }
        // return currentPath.slice(1) === pathToCheck;
        return !!matchRoute({ to: pathToCheck, fuzzy: fuzzy })
    }

    const breadcrumbs: BreadCrumbItem[] = matches.flatMap((match) => {
        const matchData = match as any;

        // Safely extract staticData from the router matches
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
        isCurrentPath: isCurrentPath,
        breadcrumbs: breadcrumbs
    }
}