import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

type Props = {};
export default function SuccessLogin({}: Props) {
  const { user } = useContext(AuthContext);
  const trimedUsername = user?.email.split('@')[0];

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
          <p></p>
        </div>
      </main>
    </>
  );
}
