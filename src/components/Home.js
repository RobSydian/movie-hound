import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { discoverMoviesCached, getGenres } from '../api';
import StyledHome from './styles/StyledHome';

export default () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  // const [genres, setGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    // discoverMovies
    //   .then((res) => res.json())
    //   .then((json) => setDiscoverMovies(json.results))
    //   .catch((e) => console.log(e));

    const responseGenres = await getGenres();
    // setGenres(await responseGenres.json());

    setDiscoverMovies(discoverMoviesCached.results);
    setPopularMovies(
      discoverMoviesCached.results.filter((movie) => movie.vote_average >= 8)
    );

    // if (await genre.status === 404) {
    //   setError(true);
    // }

    console.log(await responseGenres.json());

    setLoading(false);
  }, []);

  return (
    <StyledHome>
      <h1>Discover</h1>
      <Carousel items={discoverMovies} />
      <h1>Popular Movies</h1>
      <Carousel items={popularMovies} />
      {/* 
      My List
      
       */}
    </StyledHome>
  );
};
