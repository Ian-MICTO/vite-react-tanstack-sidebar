"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, SettingsIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useLogout } from "@/features/auth/auth-hooks";
import { useRouter } from "@tanstack/react-router";

const user = {
    name: "Shaban Haider",
    email: "shaban@efferd.com",
    avatar: "https://github.com/shabanhr.png",
};

export function NavUser() {
    const logout = useLogout(); // 2. Call the hook at the top level
    const router = useRouter(); // 3. Get the router instance

    const handleLogout = async () => {
        // Run your logout logic (clearing localStorage, tokens, etc.)
        logout();

        // Force TanStack Router to re-evaluate 'beforeLoad' guards
        // and optionally push them to the login page safely
        await router.invalidate();
        router.navigate({ to: "/login" });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="size-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuItem className="flex items-center justify-start gap-2">
                    <DropdownMenuLabel className="flex items-center gap-3">
                        <Avatar className="size-10">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <span className="font-medium text-foreground">{user.name}</span>{" "}
                            <br />
                            <div className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-muted-foreground text-xs">
                                {user.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserIcon
                        />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SettingsIcon
                        />
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <CreditCardIcon
                        />
                        Plan & Billing
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="w-full cursor-pointer"
                        variant="destructive"
                    >
                        <Button onClick={handleLogout}>
                            <LogOutIcon />
                            Log out
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
