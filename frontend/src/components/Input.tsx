import React from 'react';

interface Props {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputLabel: string;
}

const Input: React.FC<Props> = ({ inputValue, handleChange, inputLabel }) => {
  return (
    <>
      <label htmlFor={inputLabel} className='text-primary padding-right'>
        {inputLabel}
      </label>
      <input
        id={inputLabel}
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
