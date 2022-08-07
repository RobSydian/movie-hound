import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserSecret, FaSistrix } from 'react-icons/fa';
import Logo from '../images/moviehoundlogo.png';
import StyledHeader from './styles/StyledHeader';
import { useAuth } from '../contexts/AuthContext';
import DropdownMenu from './UI/DropdownMenu';

export default () => {
  const { currentUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggled, setToggled] = useState(false);
  // useEffect(() => {

  // }, [currentUser]);

  const userDropdownItems = [
    { id: 'i0', name: 'My profile', ref: '/update-profile' },
    { id: 'i2', name: 'Logout', ref: '' },
  ];

  const showDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleHandler = () => {
    setToggled(!toggled);
  };

  return (
    <StyledHeader isToggled={toggled}>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="movies hound logo" />
          </Link>
        </div>
        <div
          className={`burger ${toggled ? 'toggled' : ''}`}
          onClick={toggleHandler}
        >
          <div className="menu-button"></div>
          <div className="menu-button"></div>
          <div className="menu-button"></div>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/search">
              <FaSistrix />
            </Link>
          </li>
          <li>
            <Link to="/discover" className="section">
              Discover
            </Link>
          </li>
          {/* <li> */}
          {currentUser && (
            <li>
              <Link to="/my-list" className="section">
                My List
              </Link>
            </li>
          )}
          {/* </li> */}
          <li>
            <Link to="/genres" className="section">
              Genres
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
            <>
              <div className="dropdown-icon" onClick={showDropdownHandler}>
                <FaUserSecret />
              </div>
              {showDropdown && <DropdownMenu items={userDropdownItems} />}
            </>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
