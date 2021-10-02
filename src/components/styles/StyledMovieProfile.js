import styled from 'styled-components';

const StyledMovieProfile = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  .full-container {
    width: 100%;
    padding: 2% 0 0 10%;
    min-height: 70vh;
  }

  .top-container {
    padding: 0 15% 0 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .video-container p {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }

  h1 {
    font-size: 50px;
  }

  h3 {
    font-size: 25px;
  }

  .body-container {
    padding: 2em 1em 0 0;
    font-weight: bold;
  }
  .body-container,
  .titleSection p {
    font-size: ${({ theme }) => theme.fonts.textSize};
  }

  .genres {
    padding-top: 2em;
  }

  .highlightedData {
    font-weight: bold;
    font-size: 1.5em;
  }

  .detailBoard {
    padding: 0 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default StyledMovieProfile;
