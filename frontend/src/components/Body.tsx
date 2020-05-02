import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

interface trackObject {
  artist: string;
  title: string;
  id: number;
}

const Body: React.FC = () => {
  const [songId, setSongId] = useState<string>('');
  const [trackById, setTrackById] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSongId(inputValue);
  };

  const getTrackById = () => {
    fetch(`http://localhost:3001/song/${songId}`)
      .then((res) => res.text())
      .then((res) => setTrackById(JSON.parse(res)));

    if (trackById.length > 0) {
      const track: {
        artist: string;
        title: string;
      } = trackById[0];
      setArtist(track.artist);
      setTitle(track.title);
    }
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
              inputLabel='Search by track ID'
            />
            <Button handleClick={getTrackById} buttonLabel='Search' />
            <br />
            <Input
              handleChange={onInputChange}
              inputValue={songId}
              inputLabel='Search by Artist'
            />
            <p className='text-white-75 font-weight-light mb-5'>
              {trackById.length > 0 ? (
                <div>
                  <p>Artist: </p>
                  <span className='text-primary'>{artist}</span>
                  <p>Song Title: </p>
                  <span className='text-primary'>{title}</span>
                </div>
              ) : (
                ''
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
