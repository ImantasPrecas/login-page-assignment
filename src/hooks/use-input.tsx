import React, { useState } from 'react';

// type Props = {
//   validateValueFN: (enteredValue: string) => {};
// };
const useInput = (validateValueFN: any) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean | undefined>(false);

  const valueIsValid = validateValueFN(enteredValue);
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
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
