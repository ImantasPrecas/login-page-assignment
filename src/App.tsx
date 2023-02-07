import { useEffect, useState } from 'react';
import Background from './components/BG/Background';
import LoginPageLayout from './components/Layout/LoginPageLayout';
import SuccessLogin from './components/SuccessLogin';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const userIsLogedIn = getItem('userIsLogedIn');
    if (!userIsLogedIn) {
      setIsLoggedIn(false);
      return;
    } else {
      setIsLoggedIn(true);
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
