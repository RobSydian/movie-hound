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

  @media screen and (min-width: 576px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;
