import React from 'react';
import StyledCarouselItem from './styles/StyledCarouselItem';

export default ({ title, width, image }) => (
  <StyledCarouselItem width={width}>
    <img src={image} alt="" />
  </StyledCarouselItem>
);
