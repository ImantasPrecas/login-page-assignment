import React, { ReactElement } from 'react';

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AuthContext = React.createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
