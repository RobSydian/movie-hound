import React, { useState, useEffect } from 'react';

import { getGenres, discoverMovies, discoverMoviesByGenre } from '../api';
import Carousel from './Carousel';
import StyledGenres from './styles/StyledGenres';

export default () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const responseGenres = await getGenres();
    const responseMovies = await discoverMovies();
    setMovies((await responseMovies.json()).results);
    setGenres((await responseGenres.json()).genres);

    setLoading(false);
  }, []);

  return (
    <StyledGenres>
      <h1>Genres</h1>
      {genres.map((genre) => (
        <div key={genre.id}>
          <h2>{genre.name}</h2>
          <Carousel
            items={movies.filter((movie) => movie.genre_ids.includes(genre.id))}
          />
        </div>
      ))}
    </StyledGenres>
  );
};
