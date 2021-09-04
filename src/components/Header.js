import React from 'react';

import Logo from '../images/moviehoundlogo.png';
import StyledHeader from './styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div className="logo">
          <a href="www.google.com">
            <img src={Logo} alt="movies hound logo" />
          </a>
        </div>
        <ul className="navigation">
          <li>
            <a href="www.google.com">Discover</a>
          </li>
          <li>
            <a href="www.google.com">My List</a>
          </li>
          <li>
            <a href="www.google.com">Search</a>
          </li>
          <li>
            <a href="www.google.com">User</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
