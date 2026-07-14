import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { SidebarNavGroup } from "@/types/navigation";
import { ChevronRightIcon } from "lucide-react";
// import { useCurrentPath } from "@/hooks/use-current-path";
import { useMatchRoute } from "@tanstack/react-router";
import { useCurrentPath } from "@/hooks/use-current-path";

export function NavGroup({ label, items }: SidebarNavGroup) {
    const { isCurrentPath } = useCurrentPath();

    return (
        <SidebarGroup>
            {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
            <SidebarMenu>
                {items.map((item) => {
                    const isItemActive = item.path ? !!isCurrentPath(item.path, true) : false;
                    const isSubItemActive = item.subItems?.some(sub =>
                        sub.path ? !!isCurrentPath(sub.path) : false
                    );
                    return (
                        <Collapsible
                            asChild
                            className="group/collapsible"
                            // defaultOpen={
                            //     !!item.isActive ||
                            //     item.subItems?.some((i) => !!i.isActive)
                            // }
                            defaultOpen={isItemActive || isSubItemActive}
                            key={item.title}
                        >
                            <SidebarMenuItem>
                                {item.subItems?.length ? (
                                    <>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton isActive={item.isActive}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                                <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.subItems?.map((subItem) => {
                                                    const isSubActive = subItem.path
                                                        ? !!isCurrentPath(subItem.path)
                                                        : false;
                                                    return (
                                                        <SidebarMenuSubItem key={subItem.title}>
                                                            <SidebarMenuSubButton
                                                                asChild
                                                                // isActive={isCurrentUrl(subItem.path ?? "".toString())}
                                                                isActive={isSubActive}
                                                            >
                                                                <a href={subItem.path}>
                                                                    {subItem.icon}
                                                                    <span>{subItem.title}</span>
                                                                </a>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    )
                                                })}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </>
                                ) : (
                                    <SidebarMenuButton asChild
                                        // isActive={isCurrentUrl(item.path ?? "".toString())}
                                        isActive={isItemActive}
                                    >
                                        <a href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
