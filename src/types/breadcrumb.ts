import type { LinkOptions } from "@tanstack/react-router";
export interface BreadCrumbItem {
    title: string,
    path: LinkOptions["to"],
}