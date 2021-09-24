import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { discoverMoviesCached } from '../api';
import StyledMovieProfile from './styles/StyledMovieProfile';

export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movie = discoverMoviesCached.results.filter(
      (movie) => movie.id == id
    );
    setMovie(movie[0]); // Eventually redirect if false
    setLoading(false);
  }, []);

  return loading ? (
    <h1 style={{ backgroundColor: 'white' }}>Loading...</h1>
  ) : (
    <StyledMovieProfile>
      <h2>This movie is called {movie.id}</h2>
    </StyledMovieProfile>
  );
};
