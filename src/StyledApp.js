import styled from 'styled-components';

export default styled.div`
  header {
    margin: ${({ theme }) => theme.body.margin};
    padding: ${({ theme }) => theme.body.padding};
    background: ${({ theme }) => theme.colors.background};
  }
  header h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;
