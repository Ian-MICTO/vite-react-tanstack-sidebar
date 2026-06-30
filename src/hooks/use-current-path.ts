import { useLocation } from "@tanstack/react-router";

export type IsCurrentUrlFn = (
    urlToCheck: string,
    currentUrl?: string,
    startsWith?: boolean,
) => boolean;

export type UseCurrentUrlReturn = {
    currentUrl: string;
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
        isCurrentUrl
    }
}