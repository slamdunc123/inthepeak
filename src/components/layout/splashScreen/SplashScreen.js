import React from 'react';

// css

import './SplashScreen.css';

const SplashScreen = props => {
  // receive props from App.js (parent) in this case the callBackSplash method
  const handleOnClick = () => {
    props.callBackSplash(false); // pass value 'false' up to App.js (parent) through the callBackSplash method
  };

  return (
    <div className='splash-body'>
      <h1>In The Peak</h1>
      <button className='splash-cta' onClick={handleOnClick}>
        Enter
      </button>
    </div>
  );
};

export default SplashScreen;
