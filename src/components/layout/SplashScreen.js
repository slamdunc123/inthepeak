import React from 'react';

const SplashScreen = props => {
  // receive props from App.js (parent) in this case the callBackSplash method
  const handleOnClick = () => {
    props.callBackSplash(false); // pass value 'false' up to App.js (parent) through the callBackSplash method
  };

  return (
    <div className='splash-body'>
      <h1>Splash Screen</h1>
      <button className='splash-cta' onClick={handleOnClick}>
        Click
      </button>
    </div>
  );
};

export default SplashScreen;
