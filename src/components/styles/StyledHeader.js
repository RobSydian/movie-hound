import styled from 'styled-components';

const StyledHeader = styled.div`
  // Burger animation
  .menu-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    margin-right: 1.2em;
  }

  .menu-button__burger {
    width: 40px;
    height: 6px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
  }

  .menu-button__burger::before,
  .menu-button__burger::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 6px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  .menu-button__burger::before {
    transform: translateY(-16px);
  }

  .menu-button__burger::after {
    transform: translateY(16px);
  }

  .menu-button.toggled .menu-button__burger {
    transform: translateX(-50px);
    background: transparent;
    transition: all 0.2s ease-in-out;
  }

  .menu-button.toggled .menu-button__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  .menu-button.toggled .menu-button__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
  // End of Burger animation

  .logo {
    padding: 1em 0 1em 1em;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation.toggled {
    display: flex;
    position: absolute;
    top: 9%;
    right: 0;
    width: 100%;
    perspective: 1000px;
    width: 50%;
    /* height: 600px; */
    padding-right: 5em;
    flex-flow: column wrap;
    padding: 1em 0;
    margin: 0;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.background};
    animation: slideLeft 300ms ease-in-out forwards;
    transform-origin: right center;
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .navigation li,
  .dropdown-icon {
    list-style: none;
    margin: 0.5em;
  }

  .dropdown-icon {
    align-self: center;
  }

  .navigation a {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navigation li:last-of-type a {
    border-bottom: none;
  }

  .section {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  .navigation a:hover,
  .dropdown-icon:hover {
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }

  .navigation a,
  .dropdown-icon {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
    transition: 0.3s;
    margin-right: 1rem;
    border-radius: 10px;
  }

  @media screen and (min-width: 400px) and (max-width: 991px) {
    .navigation {
      display: none;
      position: absolute;
      width: 0;
      height: 100vh;
      top: 9%;
      right: 0;
      background-color: ${({ theme }) => theme.colors.background};
      animation: slideLeft 300ms ease-in-out forwards;
      transform-origin: right center;
    }

    .navigation.toggled {
      display: flex;
      position: absolute;
      top: 9%;
      right: 0;
      width: 100%;
      perspective: 1000px;
      width: 50%;
      /* height: 600px; */
      padding-right: 5em;
      flex-flow: column wrap;
      padding: 1em 0;
      margin: 0;
      z-index: 100;
      background-color: ${({ theme }) => theme.colors.background};
      animation: slideLeft 300ms ease-in-out forwards;
      transform-origin: right center;
    }
  }

  @media screen and (min-width: 992px) {
    .navigation,
    .navigation.toggle {
      display: flex;
      position: static !important;
      top: 9%;
      right: 0;
      width: 100%;
      height: 500px;
      align-items: center !important;
      justify-content: flex-end !important;
      align-content: center !important;
      padding-right: 0 !important;
      padding: 0 4em 0 0s !important;
      flex-flow: nowrap !important;
      height: 3.5em !important;
      margin: 0 2rem 0 0 !important;
      animation: none !important;
      transition: none !important;
      transform-origin: none !important;
    }

    .burger,
    .menu-button {
      display: none;
    }

    .logo {
      padding: 0.5em 0 0 4em;
    }

    nav {
      padding: 5px;
      height: 5em;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 1200px) {
  }
`;

export default StyledHeader;
