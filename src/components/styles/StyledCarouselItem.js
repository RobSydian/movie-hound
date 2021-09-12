import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  width: ${({ width }) => width};
  background-image: url(${({ image }) => image});
  background-repeat: 'no-repeat';
  box-sizing: border-box;
  align-items: flex-end;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    background-blend-mode: overlay;
  }

  .movie-label {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 2rem;
  }

  .movie-title {
    text-align: center;
    padding: 5px 0;
  }
`;

export default StyledCarouselItem;
