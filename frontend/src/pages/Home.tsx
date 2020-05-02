import React, { useState, useEffect } from 'react';

import Body from '../components/ui/Body';

const Home = () => {
  const [APIRes, setAPIRes] = useState('');

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    fetch('http://localhost:3001/song/44')
      .then((res) => res.text())
      .then((res) => setAPIRes(res));
  };
  return (
    <>
      <Body song={APIRes} />
    </>
  );
};

export default Home;
