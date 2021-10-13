import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  width: ${({ width }) => width};
  box-sizing: border-box;
  align-items: flex-end;

  img {
    max-width: 266px;
    height: 400px;
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.08);
  }
`;

export default StyledCarouselItem;
