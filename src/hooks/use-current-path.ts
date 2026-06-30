import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { BreadCrumbItem } from "@/types/breadcrumb";
import { useLocation } from "@tanstack/react-router";

export type IsCurrentUrlFn = (
    urlToCheck: string,
    breadcrumbs: BreadCrumbItem[],
    currentUrl?: string,
    startsWith?: boolean,
) => boolean;

export type BreadCrumb = (
    breadcrumbs: BreadCrumbItem[],
) => string;

export type UseCurrentUrlReturn = {
    currentUrl: string;
    breadcrumbs: BreadCrumbItem[];
    isCurrentUrl: IsCurrentUrlFn;
};

export function useCurrentPath(): UseCurrentUrlReturn {
    const location = useLocation()
    const currentPath = location.href

    const isCurrentUrl: IsCurrentUrlFn = (
        urlToCheck: string,
        currentUrl?: string,
        startsWith?: boolean,
    ) => {
        return urlToCheck == currentPath.slice(1) ? true : false
    }


    return {
        currentUrl: currentPath,
        breadcrumbs:
            isCurrentUrl
    }
}