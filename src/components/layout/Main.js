import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import Home from '../views/Home';
import About from '../views/About';
import News from '../views/News';
import Wildlife from '../views/Wildlife';
import Activities from '../views/Activities';
import Gastronomy from '../views/Gastronomy';
import Environment from '../views/Environment';
import People from '../views/People';
import Contact from '../views/Contact';
import Cities from '../views/Cities';

const Main = () => {
  return (
    <div className='main-body'>
      {/* Main */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />>
        <Route exact path='/news' component={News} />
        <Route exact path='/wildlife' component={Wildlife} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/gastronomy' component={Gastronomy} />
        <Route exact path='/environment' component={Environment} />
        <Route exact path='/people' component={People} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cities' component={Cities} />
      </Switch>
    </div>
  );
};

export default Main;
