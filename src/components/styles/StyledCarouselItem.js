import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  width: ${({ width }) => width};
  background-image: url(${({ image }) => image});
  background-repeat: 'no-repeat';
`;

export default StyledCarouselItem;
