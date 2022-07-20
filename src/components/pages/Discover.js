import React, { useEffect, useState } from 'react';
import { discoverMovies, discoverMoviesCached } from '../../api';
import StyledDiscover from '../styles/StyledDiscover';

const Discover = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // discoverMovies
    //   .then((res) => res.json())
    //   .then((json) => setMovies(json.results))
    //   .catch((e) => console.log(e));
    setMovies(discoverMoviesCached.results);
  }, []);

  return (
    <StyledDiscover>
      <header>
        <h1>DISCOVER</h1>
      </header>
      <div className="body-container">
        {movies.map((movie) => (
          <div className="movie-tile" key={movie.id}>
            <h3 className="movie-title">{movie.original_title}</h3>
            <div className="movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </div>
          </div>
        ))}
      </div>
    </StyledDiscover>
  );
};

export default Discover;
