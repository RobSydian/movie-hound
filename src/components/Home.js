import React, { useState, useEffect } from 'react';

import Carousel from './UI/Carousel';
import RiseLoader from 'react-spinners/RiseLoader';
import { discoverMoviesCached, discoverMovies, getGenres } from '../api';
import StyledHome from './styles/StyledHome';
import RecommendationSection from './RecommendationSection';

export default () => {
  const [discoverAllMovies, setDiscoverAllMovies] = useState([]);
  // const [genres, setGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(async () => {
    discoverMovies()
      .then((res) => res.json())
      .then((json) => setDiscoverAllMovies(json.results))
      .catch((e) => console.log(e));

    // const responseGenres = await getGenres();
    // setGenres(await responseGenres.json());

    // setDiscoverAllMovies(discoverMoviesCached.results);
    setPopularMovies(
      discoverMoviesCached.results.filter((movie) => movie.vote_average >= 8)
    );

    // if (await genre.status === 404) {
    //   setError(true);
    // }

    setLoading(false);
  }, []);

  return (
    <StyledHome>
      <RiseLoader
        color="#522B47"
        cssOverride={{ margin: '100px 40%' }}
        loading={loading}
        size={50}
      />
      {!loading && <RecommendationSection recommendedMovies={popularMovies} />}
      <h1>Discover</h1>
      <RiseLoader
        color="#522B47"
        cssOverride={{ margin: '100px 40%' }}
        loading={loading}
        size={50}
      />
      {!loading && <Carousel items={discoverAllMovies} />}
      <h1>Popular Movies</h1>
      <RiseLoader
        color="#522B47"
        cssOverride={{ margin: '100px 40%' }}
        loading={loading}
        size={50}
      />
      {!loading && <Carousel items={popularMovies} />}

      {/* 
      My List
      
       */}
    </StyledHome>
  );
};
