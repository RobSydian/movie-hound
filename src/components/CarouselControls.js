import React from 'react';
import StyledCarouselControls from './styles/StyledCarouselControls';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

export default ({ previous, next }) => (
  <StyledCarouselControls>
    <IconContext.Provider value={{ color: 'white', size: '40px' }}>
      <button id="previous" onClick={() => previous()}>
        <AiFillCaretLeft />
      </button>
      <button id="next" onClick={() => next()}>
        <AiFillCaretRight />
      </button>
    </IconContext.Provider>
  </StyledCarouselControls>
);
