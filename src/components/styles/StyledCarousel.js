import styled from 'styled-components';
import StyledCarouselItem from './StyledCarouselItem';

const StyledCarousel = styled.div`
  overflow: hidden;
  margin: 0 5%;

  #content {
    margin: 5%;
    transform: translateX(${({ index }) => `-${index * 35}%`});
    white-space: nowrap;
    transition: transform 0.3s;
  }

  ${StyledCarouselItem} {
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 2rem;
    width: 500px;
    height: 280px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default StyledCarousel;
