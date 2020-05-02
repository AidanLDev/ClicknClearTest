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
  const [searchedSong, setSearchedSong] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [titles, setTitles] = useState<string[]>([]);
  const [artist, setArtist] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);

  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSongId(inputValue);
  };

  // TODO: Change this into one handleInput function that checks eve
  const onArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSearchedSong(inputValue);
  };

  const getTrackById = () => {
    fetch(`http://localhost:3001/song/${songId}`)
      .then((res) => res.text())
      .then((res) => {
        const trackObject = JSON.parse(res);
        if (trackObject.length > 0) {
          setNotFound(false);
          setArtist(trackObject[0].artist);
          setTitle(trackObject[0].title);
          setTitles([]);
        } else {
          setNotFound(true);
        }
      });
  };

  const getTracksByArtist = () => {
    fetch(`http://localhost:3001/songs/${searchedSong}`)
      .then((res) => res.text())
      .then((res) => {
        const trackObject = JSON.parse(res);
        if (trackObject.length > 0) {
          setNotFound(false);
          setArtist(trackObject[0].artist);
          // For each trackobject push into setTitles array
        } else {
          setNotFound(true);
        }
        // setArtist(trackObject);
      });
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
              handleChange={onIdChange}
              inputValue={songId}
              inputLabel='Search by track ID'
            />
            <Button handleClick={getTrackById} buttonLabel='Search by Id' />
            <br />
            <Input
              handleChange={onArtistChange}
              inputValue={searchedSong}
              inputLabel='Search by Artist'
            />
            <Button
              handleClick={getTracksByArtist}
              buttonLabel='Search by artist'
            />
            <p className='text-white-75 font-weight-light mb-5'>
              {/* if not found dispaly somethings saying */}
              {artist && !notFound ? (
                <div>
                  Artist:
                  <span className='text-primary padding-right'> {artist}</span>
                  Song Title:
                  <span className='text-primary'>
                    {' '}
                    {titles.length > 0 ? titles : title}
                  </span>
                </div>
              ) : (
                ''
              )}
              {notFound && <p>Track not found</p>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
