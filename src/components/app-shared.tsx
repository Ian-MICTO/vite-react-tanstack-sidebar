
import { LayoutGridIcon, BarChart3Icon, BriefcaseIcon, UsersIcon, PlugIcon, KeyRoundIcon, SettingsIcon, CreditCardIcon, HelpCircleIcon, BookOpenIcon } from "lucide-react";
import type { SidebarNavGroup, SidebarNavItem } from "@/types/navigation";

export const navGroups: SidebarNavGroup[] = [
    {
        label: "Product",
        items: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: (
                    <LayoutGridIcon
                    />
                ),
                isActive: false,
            },
            {
                title: "Analytics",
                path: "/analytics",
                icon: (
                    <BarChart3Icon
                    />
                ),
                isActive: false,
            },
            {
                title: "Projects",
                // path: "/projects",
                icon: (
                    <BriefcaseIcon
                    />
                ),
                isActive: false,
            },
        ],
    },
    {
        label: "Workspace",
        items: [
            {
                title: "Team",
                // path: "/team",
                icon: (
                    <UsersIcon
                    />
                ),
            },
            {
                title: "Integrations",
                // path: "/integrations",
                icon: (
                    <PlugIcon
                    />
                ),
            },
            {
                title: "API Keys",
                // path: "/api-keys",
                icon: (
                    <KeyRoundIcon
                    />
                ),
            },
        ],
    },
    {
        label: "Administration",
        items: [
            {
                title: "Settings",
                // path: "/settings",
                icon: (
                    <SettingsIcon
                    />
                ),
            },
            {
                title: "Billing",
                // path: "/billing",
                icon: (
                    <CreditCardIcon
                    />
                ),
            },
        ],
    },
];

export const footerNavLinks: SidebarNavItem[] = [
    {
        title: "Help Center",
        // path: "/help",
        icon: (
            <HelpCircleIcon
            />
        ),
        isActive: false,
    },
    {
        title: "Documentation",
        // path: "/documentation",
        icon: (
            <BookOpenIcon
            />
        ),
        isActive: false,
    },
];

export const navLinks: SidebarNavItem[] = [
    ...navGroups.flatMap((group) =>
        group.items.flatMap((item) =>
            item.subItems?.length ? [item, ...item.subItems] : [item]
        )
    ),
    ...footerNavLinks,
];
