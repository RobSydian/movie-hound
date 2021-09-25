import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  width: ${({ width }) => width};
  box-sizing: border-box;
  align-items: flex-end;
  img {
    /* width: 100%; */
    height: 400px;
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.08);
  }

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    background-blend-mode: overlay;
  } */
`;

export default StyledCarouselItem;
