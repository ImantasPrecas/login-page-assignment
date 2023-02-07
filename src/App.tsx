import { useEffect, useState } from 'react';
import Background from './components/BG/Background';
import LoginPageLayout from './components/Layout/LoginPageLayout';
import SuccessLogin from './components/SuccessLogin';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './store/auth-context';

interface User {
  email: string | null;
  password: string | null;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const { getItem } = useLocalStorage();

  useEffect(() => {
    if (getItem('userIsLogedIn')) {
      setIsLoggedIn(true);
      return;
    } else {
      setIsLoggedIn(false);
      return;
    }
  }, []);

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
