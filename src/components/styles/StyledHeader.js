import styled from 'styled-components';

const StyledHeader = styled.div`
  nav {
    padding: 5px;
  }

  .logo {
    float: left;
    padding: 0 10px;
  }

  .navigation {
    padding: 0 5% 0 55%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    background: transparent;
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
