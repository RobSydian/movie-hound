import React, { useEffect, useState } from 'react';
import Transition from 'react-transition-group/Transition';
import { useParams } from 'react-router-dom';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProductionCompaniesPanel from '../ProductionCompaniesPanel';
import Button from '../UI/Button';
import { addToListActions } from '../../store/fav-movie-list-handler-slice';
import { useDispatch } from 'react-redux';
import Notification from '../UI/Notification';
import { useSelector } from 'react-redux';
import { image_base_url, video_base_url } from '../../URLS/baseUrls';
import ProgressProvider from '../UI/ProgressProvider';

import {
  discoverMoviesCached,
  getMovieById,
  getMovieImageById,
  getVideoByMovieId,
} from '../../api';
import StyledMovieProfile from '../styles/StyledMovieProfile';
import RiseLoader from 'react-spinners/RiseLoader';

export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [isMovieAdded, setIsMovieAdded] = useState(false);

  const favMovies = useSelector((state) => state.handleList.favMovies);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    const response = await getMovieById(id);
    const imageResponse = await getMovieImageById(id);
    const videoResponse = await getVideoByMovieId(id);

    if (response.status === 404) {
      setError(true);
    }
    const movieResponse = await response.json();
    setMovie(movieResponse);
    setImage(await imageResponse.json());
    setVideo(await videoResponse.json());

    if (imageResponse.status === 404) {
      setError(true);
    }

    if (favMovies.includes(movieResponse.id)) {
      setIsMovieAdded(true);
    }
    setLoading(false);
  }, []);

  if (error) {
    return <h1 style={{ backgroundColor: 'red' }}>Error!</h1>;
  }

  const profileImageUrl = image
    ? `${image_base_url}${image.backdrops[0].file_path}`
    : null;

  const percentConverter = (value) => {
    return (value * 10).toString();
  };

  const hasVideo = video?.results.length !== 0;

  const dispatch = useDispatch();

  const addToListHandler = () => {
    dispatch(addToListActions.addMovie(movie));

    Notification({
      message: 'Successfully added to list',
      classes: 'notification-success',
    });
    setIsMovieAdded(true);
  };

  const removeFromListHandler = () => {
    dispatch(addToListActions.removeMovie(movie.id));

    Notification({
      message: 'Successfully removed from list',
      classes: 'notification-success',
    });
    setIsMovieAdded(false);
  };

  const progressStyles = {
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(90, 220, 49, 1)`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'round',
      // Customize transition animation
      transition: 'stroke-dashoffset .5s ease 1s',
      // Rotate the path
      transform: 'rotate(0)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: 'rgba(176, 182, 174, 0.5)',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'round',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: 'white',
      // Text size
      fontSize: '20px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: 'purple',
    },
  };

  return loading ? (
    <RiseLoader
      color="#522B47"
      cssOverride={{
        margin: '40% 30%',
        position: 'absolute',
        top: '-50%',
        left: '10%',
      }}
      loading={loading}
      size={50}
    />
  ) : (
    <StyledMovieProfile url={profileImageUrl}>
      <div className="full-container">
        <div className="top-container">
          <div className="titleSection">
            <h1>{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <p className="genres">
              {movie.genres.map((genre, index) => {
                return <span key={index}> · {genre.name}</span>;
              })}
            </p>
            <div className={hasVideo ? 'detailBoard' : 'detailBoardNoVid'}>
              {hasVideo && (
                <div className="progressBarContainer">
                  <ProgressProvider
                    valueStart={0}
                    valueEnd={percentConverter(movie.vote_average)}
                  >
                    {(value) => (
                      <CircularProgressbar
                        value={value}
                        text={value}
                        className="CircularProgressbar"
                        styles={progressStyles}
                      />
                    )}
                  </ProgressProvider>
                </div>
              )}
              <div className="highlightedData">Duration: {movie.runtime}m</div>
              <div className="highlightedData">
                Release date: {movie.release_date}
              </div>
            </div>
            <div className="body-container">
              <p className="description">"{movie.overview}"</p>
            </div>
          </div>
          <div className="video-container">
            <Transition in={hasVideo} timeout={1000} mountOnEnter>
              {(state) => {
                const frameClasses = state === 'entered' ? 'movieTrailer' : '';
                return (
                  <iframe
                    className={frameClasses}
                    src={`${video_base_url}${video.results[0].key}?wmode=opaque`}
                    frameBorder="0"
                    width="600"
                    height="350"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                );
              }}
            </Transition>
            {!isMovieAdded && (
              <Button
                type="button"
                func={addToListHandler}
                label="+ Add to List"
                classes="addToList"
              />
            )}
            {isMovieAdded && (
              <Button
                type="button"
                func={removeFromListHandler}
                label="Remove from List"
                classes="removeFromList"
              />
            )}
          </div>
        </div>
      </div>
      <ProductionCompaniesPanel
        companies={movie.production_companies}
        width={'200px'}
      />
    </StyledMovieProfile>
  );
};
