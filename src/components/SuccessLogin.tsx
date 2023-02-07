import { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { AuthContext } from '../store/auth-context';

type Props = {};
export default function SuccessLogin({}: Props) {
  const { user, setIsLoggedIn } = useContext(AuthContext);
  const trimedUsername = user?.email.split('@')[0];

  const { removeItem } = useLocalStorage();

  const logOutHandler = () => {
    removeItem('userIsLogedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <main className='flex flex-col justify-center items-center mt-40 md:mt-[202px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[48px] font-bold leading-[62px] text-white font-PTSans'>
            Congratulations {trimedUsername} !
          </h1>
          <p className='md:text-[18px] md:font-bold leading-[23px] text-white font-PTSans'>
            You successfully logged in!
          </p>
          <div className='border-2 border-[#00FF29] rounded-[15px] h-[50px] w-full mt-[53px] overflow-hidden'>
            <button
              type='submit'
              onClick={logOutHandler}
              className='w-full h-full text-[18px] text-[#00FF29] hover:bg-[#00ff2a44] font-bold leading-[23px] font-PTSans  disabled:cursor-not-allowed'
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
