import styled from 'styled-components';

const StyledMovieProfile = styled.div`
  min-height: 100vh;
  /* background-color: white; */

  h2 {
    color: white;
    background-color: green;
    text-decoration: none;
  }
  a,
  a:visited {
    /* color: ${({ theme }) => theme.colors.text}; */
    text-decoration: none;
  }
`;

export default StyledMovieProfile;
