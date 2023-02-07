import React from 'react';

interface User {
  email: string | null;
  password: string | null;
}

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = React.createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});
