import React from 'react';

import Logo from '../images/moviehoundlogo.png';
import LogoLG from '../images/moviehoundlogo-large.png';
import StyledFooter from './styles/StyledFooter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="logo-footer footer-element">
          <a href="/">
            <img src={LogoLG} alt="movies hound logo" width="150px" />
          </a>
        </div>
        <div className="sitemap-footer footer-element">
          {/* <h3>Sitemap</h3> */}
          <ul>
            <li>
              <Link to="/discover/">Discover</Link>
            </li>
            <li>
              <Link to="/my-list/">My List</Link>
            </li>
            <li>
              <Link to="/genres/">Genres</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="contact-details-footer footer-element">
          <h3>Contact</h3>
          <address>
            <ul>
              <li>
                <a href="mailto:movieshound@houndmovie.com">
                  movieshound@houndmovie.com
                </a>
              </li>
              <li>Barcelona st, Barcelona 08029</li>
            </ul>
          </address>
        </div>
        <div className="privacy footer-element">
          <a href="https://www.react-project.net/privacy-policy/">Privacy</a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
