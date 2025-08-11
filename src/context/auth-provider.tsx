import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type LoginFnType = (newUser: string, Cb: Function) => void;
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type LogoutFnType = (Cb: Function) => void;

type AuthContextType = {
    user: string | null;
    login: LoginFnType;
    logout: LogoutFnType;
};

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, { setItem, removeItem }] = useLocalStorage('user');
    const [user, setUser] = useState<string | null>(currentUser);

    const login: LoginFnType = (newUser, Cb) => {
        setUser(newUser);
        setItem(newUser);
        Cb();
    };

    const logout: LogoutFnType = (Cb) => {
        setUser(null);
        removeItem();
        Cb();
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext value={value}>{children}</AuthContext>;
};
