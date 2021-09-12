import React from 'react';
import StyledCarouselItem from './styles/StyledCarouselItem';

export default ({ title, width, image }) => (
  <StyledCarouselItem width={width} image={image}>
    <div className="movie-label">
      <div className="movie-title">{title}</div>
    </div>
  </StyledCarouselItem>
);
