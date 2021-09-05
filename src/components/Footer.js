import React from 'react';

import Logo from '../images/moviehoundlogo.png';
import LogoLG from '../images/moviehoundlogo-large.png';
import StyledFooter from './styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="logo-footer footer-element">
          <a href="www.google.com">
            <img src={LogoLG} alt="movies hound logo" width="150px" />
          </a>
        </div>
        <div className="sitemap-footer footer-element">
          {/* <h3>Sitemap</h3> */}
          <ul>
            <li>Discover</li>
            <li>My List</li>
            <li>Search</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="contact-details-footer footer-element">
          <h3>Contact</h3>
          <ul>
            <li>movieshound@houndmovie.com</li>
            <li>Barcelona st, Barcelona 08029</li>
            <li>This is a map</li>
          </ul>
        </div>
        <div className="privacy footer-element">Privacy</div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
