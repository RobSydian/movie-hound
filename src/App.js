import React, { useEffect, useState } from 'react';
import { discoverMovies, discoverMoviesCached } from './api';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // discoverMovies
    //   .then((res) => res.json())
    //   .then((json) => setMovies(json.results))
    //   .catch((e) => console.log(e));
    setMovies(discoverMoviesCached.results);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE HOUND</h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.original_title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
            />
          </div>
        ))}
      </header>
    </div>
  );
};

export default App;
