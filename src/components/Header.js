import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserSecret, FaSistrix } from 'react-icons/fa';
import Logo from '../images/moviehoundlogo.png';
import StyledHeader from './styles/StyledHeader';
import { useAuth } from '../contexts/AuthContext';

export default () => {
  const { currentUser } = useAuth();
  // useEffect(() => {

  // }, [currentUser]);
  return (
    <StyledHeader>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="movies hound logo" />
          </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/discover" className="section">
              Discover
            </Link>
          </li>
          <li>
            {currentUser && (
              <Link to="/my-list" className="section">
                My List
              </Link>
            )}
          </li>
          <li>
            <Link to="/genres" className="section">
              Genres
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FaSistrix />
            </Link>
          </li>
          {!currentUser ? (
            <>
              <li>
                <Link to="/signup" className="section">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/Login" className="section">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <Link to="/update-profile">
              <FaUserSecret />
            </Link>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
