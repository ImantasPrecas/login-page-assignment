import React, { useContext, useEffect, useState } from 'react';
import useInput from '../../hooks/use-input';
import { PersonIconSVG, KeyIconSVG } from '../../assets/GraphicElements/GraphicElements';
import { AuthContext } from '../../store/auth-context';
import { fakePostUser } from '../../api/fakeApi';
import useLocalStorage from '../../hooks/useLocalStorage';

// const EMAIL_REGEX =
//   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

type Props = {};
function LoginForm({}: Props) {
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean | null>();
  const [userNotFound, setUserNotFound] = useState<boolean | null>();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (enteredEmail: string) =>
      enteredEmail.trim() !== '' &&
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
        enteredEmail
      )
  );

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (enteredPassword: string) =>
      enteredPassword.trim() !== '' && enteredPassword.trim().length > 3
  );

  const { setItem } = useLocalStorage();

  let formData = {
    email: '',
    password: '',
  };

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const postUser = async (formData: any) => {
    setIsLoading(true);
    try {
      const result = await fakePostUser(formData);
      setIsLoggedIn(true);
      setItem('userIsLogedIn', enteredEmail);
      setIsLoading(false);
    } catch (error) {
      setUserNotFound(true);
      setIsLoading(false);
    }
  };

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }

    formData = { ...formData, email: enteredEmail, password: enteredPassword };

    resetEmailInput();
    resetPasswordInput();

    setUser(formData);
    postUser(formData);
  };
  return (
    <div className='flex flex-col justify-center items-center mt-12 w-full'>
      <form action='/' className='w-full' onSubmit={formSubmissionHandler}>
        {/* EMAIL */}
        <div
          className={`relative border rounded-[10px]  h-[50px] w-full hover:bg-slate-100/5 
            ${emailInputHasError ? 'border-red-400' : ''}`}
        >
          <div className='absolute mx-4 mt-2'>
            <PersonIconSVG />
          </div>
          <input
            type='text'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder='User name or E-mail'
            value={enteredEmail}
            className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
          />
        </div>
        {emailInputHasError && (
          <p className='mt-2 text-lg text-red-400'>Please enter valid email!</p>
        )}

        {/* PASSWORD */}
        <div>
          <div className='relative border rounded-[10px] mt-5 overflow-hidden h-[50px] w-full hover:bg-slate-100/5'>
            <div className='absolute mx-4 mt-2'>
              <KeyIconSVG />
            </div>
            <input
              type='password'
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder='Password'
              className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
            />
          </div>
          {passwordInputHasError && (
            <p className='mt-2 text-lg text-red-400'>Please enter valid password</p>
          )}
          {userNotFound && (
            <p className='mt-2 text-lg text-red-400'>
              User not found, please enter valid email and password.
            </p>
          )}
          {isLoading && <p className='mt-2 text-lg text-white'>Loading...</p>}
        </div>

        <div
          className={`border-2 ${
            formIsValid ? ' border-[#00FF29]' : 'border-[#00ff2a64]'
          } border-[#00FF29] rounded-[15px] h-[50px] w-full mt-[53px] overflow-hidden`}
        >
          <button
            disabled={!formIsValid}
            type='submit'
            className={`w-full h-full text-[18px] font-bold leading-[23px] font-PTSans ${
              formIsValid
                ? ' text-[#00FF29] hover:bg-[#00ff2a44]'
                : 'text-[#00ff2a64] hover:bg-[#00ff2a0e]'
            } disabled:cursor-not-allowed`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
