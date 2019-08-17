import React, { Fragment, useState } from 'react';

// css
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// layout components
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import SplashScreen from './components/layout/splashScreen/SplashScreen';

const App = () => {
  const [splash, setSplash] = useState(true);

  const callBackSplash = bool => {
    // receives callBack value of 'false' from child SplashScreen.js callBack function: props.callBackSplash(false)
    setSplash(
      bool // set state splash value to false
    );
    console.log(bool);
  };

  return (
    <Router>
      <div className='App'>
        {splash ? (
          <Fragment>
            <SplashScreen callBackSplash={callBackSplash} />
          </Fragment>
        ) : (
          <Fragment>
            <Header />
            <Main />
            <Footer />
          </Fragment>
        )}
      </div>
    </Router>
  );
};

export default App;
