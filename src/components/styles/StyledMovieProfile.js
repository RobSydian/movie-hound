import styled from 'styled-components';

const StyledMovieProfile = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed;

  .full-container {
    width: auto;
    padding: 1rem;
    min-height: 80vh;
  }

  .video-container {
    min-height: 50%;
    margin: 0 -1em 0 -1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .video-container p {
    text-align: center;
    font-weight: bold;
  }

  .body-container {
    padding: 0.5em 0;
    font-weight: bold;
  }
  .body-container,
  .titleSection p {
    /* font-size: ${({ theme }) => theme.fonts.textSize}; */
  }

  .genres {
    padding-top: 0;
  }

  .highlightedData {
    font-weight: bold;
    font-size: 1.5em;
  }

  .detailBoard {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .detailBoardNoVid {
    padding: 0 60% 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .movieTrailer {
    animation: showTrailer 1s ease-out forwards;
  }

  .progressBarContainer {
    width: 120px;
  }

  //Animations

  @keyframes showTrailer {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    50% {
      opacity: 1;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 400px) {
    iframe {
      width: 415px;
      height: 235px;
      margin-bottom: 0.5em;
    }

    .progressBarContainer {
      margin: auto;
    }
  }

  @media screen and (min-width: 992px) {
    min-height: 80vh;

    .full-container {
      width: auto;
      padding: 2% 15% 0 10%;
      min-height: 80vh;
    }

    .top-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .video-container {
      width: 600px;
      margin: 0;
    }
    .video-container p {
      display: block;
      text-align: center;
      font-weight: bold;
    }

    iframe {
      width: 600px;
      height: 300px;
      margin-bottom: 1em;
    }

    .detailBoard {
      padding: 0 20% 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .genres {
      padding-top: 2em;
    }

    .progressBarContainer {
      margin: 0;
    }

    .body-container {
      padding: 2em 1em 0 0;
    }
  }
`;

export default StyledMovieProfile;
