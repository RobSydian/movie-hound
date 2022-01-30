import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserSecret, FaSistrix } from 'react-icons/fa';
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
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/search">
            <FaSistrix />
          </Link>
        </li>
        <li>
          <Link to="/UserRegistrationForm">
            <FaUserSecret />
          </Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);
