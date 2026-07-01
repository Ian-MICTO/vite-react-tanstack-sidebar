const AUTH_KEY = 'mock-auth';
const EMAIL = 'demo@example.com';
const PASSWORD = 'password123';


// export function isAuthenticated(): boolean {
//     if (typeof window === 'undefined') {
//         return false
//     }
//     return window.localStorage.getItem(AUTH_KEY) === 'true'
// }

// export function setAuthenticated(value: boolean) {
//     if (typeof window === 'undefined') {
//         return
//     }
//     return window.localStorage.setItem(AUTH_KEY, value ? 'true' : 'false')
// }

// export function logout() {
//     if (typeof window === 'undefined') {
//         return
//     }
//     return window.localStorage.removeItem(AUTH_KEY)
// }
export const mockAuthService = {
    isAuthenticated: (): boolean => {
        if (typeof window === 'undefined') {
            return false
        }
        return window.localStorage.getItem(AUTH_KEY) === 'true';
    },

    // Easier implementation of login that doesn't require email/password validation
    setAuthenticated: (value: boolean) => {
        if (typeof window === 'undefined') {
            return
        }
        window.localStorage.setItem(AUTH_KEY, value ? 'true' : 'false');
    },

    // More realistic implementation of login that requires email/password validation
    // login: (value: boolean) => {
    login: (email: string, password: string): boolean => {
        if (typeof window === 'undefined') {
            return false
        }
        const value = email === EMAIL && password === PASSWORD;
        if (value) {
            window.localStorage.setItem(AUTH_KEY, 'true');
            return true;
        }
        return value;
    },

    logout: () => {
        if (typeof window === 'undefined') {
            return;
        }
        window.localStorage.removeItem(AUTH_KEY);
    }
}