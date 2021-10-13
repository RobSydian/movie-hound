import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { discoverMoviesCached, getGenres } from '../api';
import StyledHome from './styles/StyledHome';

export default () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    // discoverMovies
    //   .then((res) => res.json())
    //   .then((json) => setDiscoverMovies(json.results))
    //   .catch((e) => console.log(e));

    const responseGenres = await getGenres();
    setDiscoverMovies(discoverMoviesCached.results);
    setGenres(await responseGenres.json());

    // if (await genre.status === 404) {
    //   setError(true);
    // }

    console.log(genres);

    setLoading(false);
  }, []);

  return (
    <StyledHome>
      <h1>Discoveru</h1>
      <Carousel items={discoverMovies} />
      {/* {genres.map((genre) => (
        <div>{genre.name}</div>
      ))} */}
    </StyledHome>
  );
};
