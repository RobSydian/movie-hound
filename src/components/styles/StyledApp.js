import styled from 'styled-components';

export default styled.div`
  html {
    overflow-x: hidden;
    width: 100vw;
  }

  header h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  header {
    margin: ${({ theme }) => theme.body.margin};
    padding: ${({ theme }) => theme.body.padding};
    background: ${({ theme }) => theme.colors.background};
  }

  h1 {
    font-size: 35px;
  }

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 400px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 25px;
    }
  }

  @media screen and (min-width: 1200px) {
  }
`;
