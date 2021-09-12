import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { discoverMovies, discoverMoviesCached } from '../api';
import StyledHome from './styles/StyledHome';

export default () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // discoverMovies
    //   .then((res) => res.json())
    //   .then((json) => setMovies(json.results))
    //   .catch((e) => console.log(e));
    setMovies(discoverMoviesCached.results);
  }, []);

  return (
    <StyledHome>
      <h1>Discover</h1>
      <Carousel items={movies} />
    </StyledHome>
  );
};
