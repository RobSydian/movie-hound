import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { addToListActions } from '../store/fav-movie-list-handler-slice';
import { image_base_url } from '../URLS/baseUrls';
import StyledRecommendationSection from './styles/StyledRecommendationSection';
import Button from './UI/Button';
import Notification from './UI/Notification';

export default function RecommendationSection({ recommendedMovies }) {
  const favMovies = useSelector((state) => state.handleList.favMovies);

  const [movie, setMovie] = useState();
  const isMovieAdded = favMovies.includes(movie?.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (recommendedMovies.length !== 0) {
      const recommendedMovie =
        recommendedMovies[Math.floor(Math.random() * recommendedMovies.length)];
      setMovie(recommendedMovie);
    }
  }, []);

  const addToListHandler = () => {
    dispatch(addToListActions.addMovie(movie));

    Notification({
      message: 'Successfully added to list',
      classes: 'notification-success',
    });
  };

  const removeFromListHandler = () => {
    dispatch(addToListActions.removeMovie(movie.id));

    Notification({
      message: 'Successfully removed from list',
      classes: 'notification-success',
    });
  };

  const profileImageUrl = movie
    ? `${image_base_url}${movie.poster_path}`
    : null;

  return (
    <StyledRecommendationSection url={profileImageUrl}>
      <Parallax translateY={[-20, 20]} translateX={[-20, 20]}>
        <section className="recommendation-section">
          <div className="top-container">
            <div className="titleSection">
              <h1>Popular: {movie?.original_title}</h1>
              <div className="body-container">
                {/* <p className="description">"{movie?.overview}"</p> */}
                <p className="description">
                  {movie?.overview.length > 300
                    ? `${movie?.overview.substring(0, 300)}...`
                    : movie?.overview}
                </p>
                <Link to={'/details/' + movie?.id}>
                  <Button
                    type="button"
                    label="Details"
                    classes="watchDetails"
                  />
                </Link>
                {isMovieAdded ? (
                  <Button
                    type="button"
                    func={removeFromListHandler}
                    label="Remove from List"
                    classes="removeFromList"
                  />
                ) : (
                  <Button
                    type="button"
                    func={addToListHandler}
                    label="+ Add to List"
                    classes="addToList"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </StyledRecommendationSection>
  );
}
