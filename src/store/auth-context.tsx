import React from 'react';

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: { email: string; password: string } | null;
  setUser: (user: { email: string; password: string } | null) => void;
}

export const AuthContext = React.createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});
