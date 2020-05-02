import React, { useState } from 'react';

import Input from '../Input';

interface Props {
  song?: string;
}

const Body: React.FC<Props> = ({ song }) => {
  const [songId, setSongId] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSongId(inputValue);
  };
  return (
    <div className='masthead'>
      <div className='container h-100'>
        <div className='row h-100 align-items-center justify-content-center text-center'>
          <div className='col-lg-10 align-self-end'>
            <h1 className='text-uppercase text-white font-weight-bold'>
              Click'n'Clear
            </h1>
            <hr className='divider my-4' />
          </div>
          <div className='col-lg-8 align-self-baseline'>
            <p className='text-white-75 font-weight-light mb-5'>
              Search our music catalog
            </p>
            <Input
              handleChange={onInputChange}
              inputValue={songId}
              inputLabel='Search by ID'
            />
            <p className='text-white-75 font-weight-light mb-5'>{song}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
