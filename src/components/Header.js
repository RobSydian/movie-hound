import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/moviehoundlogo.png';
import StyledHeader from './styles/StyledHeader';

export default () => (
  <StyledHeader>
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="movies hound logo" />
        </Link>
      </div>
      <ul className="navigation">
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
        <li>
          <Link to="/my-list">Genres</Link>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <Link to="/profile">User</Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);
