import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserSecret, FaSistrix } from 'react-icons/fa';
import Logo from '../images/moviehoundlogo.png';
import StyledHeader from './styles/StyledHeader';
import { useAuth } from '../contexts/AuthContext';
import DropdownMenu from './UI/DropdownMenu';
import Logout from './Logout';

export default () => {
  const { currentUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggled, setToggled] = useState(false);
  // useEffect(() => {

  // }, [currentUser]);

  const userDropdownItems = [
    { id: 'i0', name: 'My profile', ref: '/update-profile' },
    { id: 'i1', name: 'Logout', ref: <Logout /> },
  ];

  const showDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleHandler = () => {
    setToggled(!toggled);

    if (showDropdown) {
      setShowDropdown(false);
    }
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
          className={`menu-button ${toggled ? 'toggled' : ''}`}
          onClick={toggleHandler}
        >
          <div className="menu-button__burger"></div>
        </div>
        <ul className={`navigation ${toggled ? 'toggled' : ''}`}>
          <li>
            <Link to="/search" onClick={toggleHandler}>
              <FaSistrix />
            </Link>
          </li>
          <li>
            <Link to="/discover" className="section" onClick={toggleHandler}>
              Discover
            </Link>
          </li>
          {/* <li> */}
          {currentUser && (
            <li>
              <Link to="/my-list" className="section" onClick={toggleHandler}>
                My List
              </Link>
            </li>
          )}
          {/* </li> */}
          <li>
            <Link to="/genres" className="section" onClick={toggleHandler}>
              Genres
            </Link>
          </li>

          {!currentUser ? (
            <>
              <li>
                <Link to="/signup" className="section" onClick={toggleHandler}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/Login" className="section" onClick={toggleHandler}>
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <div className="dropdown-icon" onClick={showDropdownHandler}>
                <FaUserSecret />
              </div>
              {showDropdown && (
                <DropdownMenu
                  showDropdownFunction={showDropdownHandler}
                  items={userDropdownItems}
                  clickItemHandler={toggleHandler}
                />
              )}
            </>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
