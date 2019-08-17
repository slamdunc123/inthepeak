import React, { Component, Fragment } from 'react';

// css
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// layout components
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import SplashScreen from './components/layout/splashScreen/SplashScreen';

class App extends Component {
  state = {
    splash: true
  };

  // onClick = () => {
  //   console.log('hello');
  //   this.setState({
  //     splash: false
  //   });
  // };

  callBackSplash = bool => {
    // receives callBack value of 'false' from child SplashScreen.js callBack function: props.callBackSplash(false)
    this.setState({
      splash: bool // set state splash value to false
    });
    console.log(bool);
  };
  render() {
    const { splash } = this.state;
    return (
      <Router>
        <div className='App'>
          {splash ? (
            <Fragment>
              {/* <h1>Splash</h1>
              <button onClick={this.onClick}>Click</button> */}
              <SplashScreen callBackSplash={this.callBackSplash} />{' '}
              {/* pass down callBackSplash function as props */}
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
  }
}

export default App;
