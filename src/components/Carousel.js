import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselControls from './CarouselControls';
import CarouselItem from './CarouselItem';
import StyledCarousel from './styles/StyledCarousel';

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex % items.length);
  };
  const image_base_url = 'https://image.tmdb.org/t/p';
  const image_width = 300;

  return (
    <StyledCarousel index={activeIndex}>
      <CarouselControls
        previous={() => updateIndex(activeIndex - 1)}
        next={() => updateIndex(activeIndex + 1)}
      />
      <div id="content">
        {items.map((movie) => (
          <Link key={movie.id} to={'/details/' + movie.id}>
            <CarouselItem
              width="40%"
              image={`${image_base_url}/w${image_width}${movie.poster_path}`}
              movie={movie}
            />
          </Link>
        ))}
      </div>
    </StyledCarousel>
  );
};
