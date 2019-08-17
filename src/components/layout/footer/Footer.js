import React from 'react';

// css
import './Footer.css';

// partial components
import Copyright from '../../partials/copyright/Copyright';
import Social from '../../partials/social/Social';

const Footer = () => {
  return (
    <div className='footer-background text-white text-center'>
      <Social />
      <Copyright />
    </div>
  );
};

export default Footer;
