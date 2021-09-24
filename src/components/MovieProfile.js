import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { discoverMoviesCached, getMovieById } from '../api';
import StyledMovieProfile from './styles/StyledMovieProfile';

export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    // const movie = discoverMoviesCached.results.filter(
    //   (movie) => movie.id == id
    // );
    const response = await getMovieById(id);

    if (response.status === 404) {
      setError(true);
    }

    setMovie(await response.json());
    setLoading(false);
  }, []);

  if (error) {
    return <h1 style={{ backgroundColor: 'red' }}>Error!</h1>;
  }

  return loading ? (
    <h1 style={{ backgroundColor: 'white' }}>Loading...</h1>
  ) : (
    <StyledMovieProfile>
      <h2>This movie is called {movie.title}</h2>
    </StyledMovieProfile>
  );
};
