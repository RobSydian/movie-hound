import styled from 'styled-components';

const StyledHeader = styled.div`
  .burger {
    padding: 0.1em 0;
    margin-right: 1.5rem;
  }
  .menu-button {
    display: block;
    background-color: #fff;
    height: 0.3em;
    width: 2rem;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    margin: 0.3em 0;
  }

  .logo {
    padding: 1em 0 1em 1em;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation {
    display: ${({ isToggled }) => (isToggled ? 'flex' : 'none')};
    width: 60%;
    height: 100vh;
    position: absolute;
    top: 8%;
    right: 0%;
    /* align-items: center;
    justify-content: space-around; */
    padding-right: 5em;
    flex-flow: column wrap;
    padding: 1em 0;
    margin: 0;
    z-index: ${({ isToggled }) => (isToggled ? '100' : '0')};
    background-color: ${({ theme }) => theme.colors.background};
  }

  .navigation li {
    list-style: none;
    margin: 0.5em;
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

  @media screen and (min-width: 576px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
    .burger,
    .menu-button {
      display: none;
    }

    .logo {
      padding: 1em 0 0 5em;
    }

    nav {
      padding: 5px;
      height: 5em;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navigation {
      position: unset;
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-content: flex-end;
      padding-right: 0 5em 0 0s;
      /* width: auto; */
      height: 3.5em;
      margin: 0;
    }
  }
`;

export default StyledHeader;
