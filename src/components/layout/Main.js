import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Cities from '../views/Cities';

const Main = () => {
  return (
    <div className='main-body'>
      Main
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' out component={About} />
        <Route exact path='/contact' out component={Contact} />
        <Route exact path='/cities' component={Cities} />
      </Switch>
    </div>
  );
};

export default Main;
