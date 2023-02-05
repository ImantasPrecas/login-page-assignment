import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

type Props = {};
export default function SuccessLogin({}: Props) {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[48px] font-bold leading-[62px] text-white font-PTSans'>
          Congratulations!
        </h1>
        <p className='md:text-[18px] md:font-bold leading-[23px] text-white font-PTSans'>
          User successfully logged in!
        </p>
      </div>
    </>
  );
}
