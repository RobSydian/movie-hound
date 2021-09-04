import styled from 'styled-components';

const StyledDiscover = styled.div`
  .body-container {
    padding: 0 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .movie-tile {
    margin: 10px;
    flex-shrink: 0;
    position: relative;
    max-width: 300px;
  }

  .movie-tile:hover .movie-title {
    opacity: 1;
  }

  .movie-title {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Black see-through */
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    padding: 20px 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  .movie-image {
    width: auto;
  }
`;

export default StyledDiscover;
