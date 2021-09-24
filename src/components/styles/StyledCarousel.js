import styled from 'styled-components';
import StyledCarouselItem from './StyledCarouselItem';

const StyledCarousel = styled.div`
  overflow: hidden;
  margin: 0 1%;

  #content {
    margin: 1%;
    transform: translateX(${({ index }) => `-${index * 40}%`});
    white-space: nowrap;
    transition: transform 0.3s;
  }

  ${StyledCarouselItem} {
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 1rem;
    width: 300px;
    height: 450px;
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

export default StyledCarousel;
