import { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
    authenticated: boolean;
    authToken: (token: string) => void;
    logoutToken: () => void;
    };

export const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    authToken: () => {},
    logoutToken: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(true || false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const authToken = (token: string) => {
        localStorage.setItem('token', token);
        setAuthenticated(true);
    };

    const logoutToken = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, authToken, logoutToken }}>
            {children}
        </AuthContext.Provider>
    )
}