import React, { useState } from 'react';
import CarouselControls from './CarouselControls';
import CarouselItem from './CarouselItem';
import StyledCarousel from './styles/StyledCarousel';

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    console.log(newIndex % items.length);

    setActiveIndex(newIndex % items.length);
  };

  return (
    <StyledCarousel index={activeIndex}>
      <CarouselControls
        previous={() => updateIndex(activeIndex - 1)}
        next={() => updateIndex(activeIndex + 1)}
      />
      <div id="content">
        {items.map((movie) => (
          <CarouselItem
            width="40%"
            key={movie.id}
            title={movie.original_title}
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        ))}
      </div>
    </StyledCarousel>
  );
};
