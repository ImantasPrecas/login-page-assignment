import { useContext, useState } from 'react';
import { PersonIconSVG, KeyIconSVG } from '../../assets/GraphicElements/GraphicElements';
import { AuthContext } from '../../store/auth-context';

type Props = {};
function Form({}: Props) {
  const { setIsLoggedIn } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState<string>('');
  const [emailIsValid, setEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);

  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  return (
    <div className='flex flex-col justify-center items-center mt-12 w-full'>
      <form action='/' className='w-full'>
        {/* EMAIL */}
        <div className='relative border rounded-[10px] overflow-hidden h-[50px] w-full mb-5 hover:bg-slate-100/5'>
          <div className='absolute mx-4 mt-2'>
            <PersonIconSVG />
          </div>
          <input
            type='text'
            placeholder='User name or E-mail'
            className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
          />
        </div>
        {/* PASSWORD */}
        <div>
          <div className='relative border rounded-[10px] overflow-hidden h-[50px] w-full hover:bg-slate-100/5'>
            <div className='absolute mx-4 mt-2'>
              <KeyIconSVG />
            </div>
            <input
              type='password'
              placeholder='Password'
              className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
            />
          </div>
        </div>
        <div className='border-2 border-[#00FF29] rounded-[15px] h-[50px] w-full mt-[53px] overflow-hidden'>
          <button className='w-full h-full text-[18px] font-bold leading-[23px] font-PTSans text-[#00FF29] hover:bg-[#00ff2a44]'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
