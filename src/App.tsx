import { useState } from 'react';
import Background from './components/BG/Background';
import LoginPageLayout from './components/LoginPageLayout';
import SuccessLogin from './components/SuccessLogin';
import { AuthContext } from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Background />
        {isLoggedIn ? <SuccessLogin /> : <LoginPageLayout />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
