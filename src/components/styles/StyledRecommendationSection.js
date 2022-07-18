import styled from 'styled-components';

const StyledRecommendationSection = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed;
  padding: 0 2rem;

  .full-container {
    width: auto;
    padding: 2% 0 0 10%;
    min-height: 80vh;
  }

  .top-container {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .titleSection {
    margin: auto;
    padding: 2rem;
  }

  .titleSection h1 {
    font-size: 50px;
    margin: 0;
    padding: 0;
  }

  .titleSection h3 {
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

  .titleSection {
    width: 100%;
    /* margin: auto; */
  }

  .genres {
    padding-top: 2em;
  }

  .highlightedData {
    font-weight: bold;
    font-size: 1.5em;
  }
`;

export default StyledRecommendationSection;
