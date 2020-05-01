import React, { useState, useEffect } from 'react';

import Header from '../components/ui/Header';

const Home = () => {
  const [APIRes, setAPIRes] = useState('');

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    fetch('http://localhost:3001/testAPI')
      .then((res) => res.text())
      .then((res) => setAPIRes(res));
  };
  return (
    <>
      <p>{APIRes}</p>
      <Header />
    </>
  );
};

export default Home;
