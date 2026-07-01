import { mockAuthService as auth } from "@/lib/auth";

export function useIsAuthenticated(): boolean {
    return auth.isAuthenticated();
}

export function useSetAuthenticated(value: boolean) {
    auth.setAuthenticated(value);
}

export function useLogin(email: string, password: string): boolean {
    return auth.login(email, password);
}

export function useLogout() {
    return () => { auth.logout() };
}