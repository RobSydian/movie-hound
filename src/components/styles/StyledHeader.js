import styled from 'styled-components';

const StyledHeader = styled.div`
  nav {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    padding: 1em 0 0 5em;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5em;
  }

  .navigation li {
    list-style: none;
  }

  .navigation a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: ${({ theme }) => theme.colors.text};
    opacity: 1;
    transition: 0.3s;
  }

  .navigation a:hover {
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }

  @media all and (max-width: 800px) {
    .navigation {
      justify-content: space-around;
    }
  }

  @media all and (max-width: 600px) {
    .navigation {
      flex-flow: column wrap;
      padding: 0;
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
  }
`;

export default StyledHeader;
