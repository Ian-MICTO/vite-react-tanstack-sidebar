export type SidebarNavItem = {
    title: string;
    path?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
    label?: string;
    items: SidebarNavItem[];
};