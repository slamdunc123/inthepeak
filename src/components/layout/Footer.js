import React from 'react';

// css
import './Footer.css';

// partial components
import Copyright from '../partials/Copyright';
import Social from '../partials/Social';

const Footer = () => {
  return (
    <div className='footer-background text-white text-center'>
      <Social />
      <Copyright />
    </div>
  );
};

export default Footer;
