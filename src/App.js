import React, { Fragment, useState } from 'react';

// css
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// layout components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import SplashScreen from './components/layout/SplashScreen';

const App = () => {
  const [splash, setSplash] = useState(true); // set state using useState hook

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
        {splash ? ( // is splash is true then render SplashScreen else render Home page
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
