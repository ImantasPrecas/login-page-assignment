import { useState } from 'react';
import Background from './components/BG/Background';
import LoginPageLayout from './components/Layout/LoginPageLayout';
import SuccessLogin from './components/SuccessLogin';
import { AuthContext } from './store/auth-context';

interface User {
  user: { email: string; password: string } | null;
  setUser: (user: { email: string; password: string } | null) => void;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
        <Background />
        {isLoggedIn ? <SuccessLogin /> : <LoginPageLayout />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
