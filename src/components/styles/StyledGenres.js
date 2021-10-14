import styled from 'styled-components';

const StyledGenres = styled.div`
  color: ${({ theme }) => theme.colors.text};
  min-height: 90vh;

  h1 {
    margin: 2em 0 0 2em;
  }

  h2 {
    margin: 2em 0 0 3em;
    font-weight: bold;
  }
`;

export default StyledGenres;
