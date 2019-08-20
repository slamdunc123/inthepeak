import React from 'react';

// partials
import Clock from '../partials/Clock';

// components
import Cities from './Cities';

const Home = () => {
  return (
    <div className='container'>
      <Clock />
      <Cities />
    </div>
  );
};

export default Home;
