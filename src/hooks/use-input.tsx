import React, { useEffect, useState } from 'react';

const useInput = (inputName: string) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean | undefined>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [valueIsValid, setValueIsValid] = useState<boolean | null>();

  useEffect(() => {
    if (inputName === 'email') {
      if (enteredValue.trim() === '') {
        setErrorMessage('Email input should not be empty!');
        setValueIsValid(false);
        return;
      }
      if (
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
          enteredValue
        )
      ) {
        setErrorMessage('Please enter valid email');
        setValueIsValid(false);
        return;
      } else {
        setValueIsValid(true);
      }
    }
    if (inputName === 'password') {
      if (enteredValue.trim() === '') {
        setErrorMessage('Password input should not be empty!');
        setValueIsValid(false);
        return;
      }
      if (enteredValue.trim().length < 4) {
        setErrorMessage('Password should be more than 4 characters');
        setValueIsValid(false);
        return;
      } else {
        setValueIsValid(true);
        setIsTouched(false);
      }
    }
  }, [enteredValue, isTouched]);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
