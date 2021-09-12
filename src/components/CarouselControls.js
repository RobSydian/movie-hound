import React from 'react';
import StyledCarouselControls from './styles/StyledCarouselControls';

export default ({ previous, next }) => (
  <StyledCarouselControls>
    <button id="previous" onClick={() => previous()}>
      Prev
    </button>
    <button id="next" onClick={() => next()}>
      Next
    </button>
  </StyledCarouselControls>
);
