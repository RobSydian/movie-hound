import React, { useEffect, useState } from 'react';
import Transition from 'react-transition-group/Transition';
import { useParams } from 'react-router-dom';
import ProgressBar from 'react-animated-progress-bar';
import ProductionCompaniesPanel from './ProductionCompaniesPanel';
import {
  discoverMoviesCached,
  getMovieById,
  getMovieImageById,
  getVideoByMovieId,
} from '../api';
import StyledMovieProfile from './styles/StyledMovieProfile';
import RiseLoader from "react-spinners/RiseLoader";


export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [image, setImage] = useState();
  const [video, setVideo] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  const video_base_url = 'https://www.youtube.com/embed/';

  useEffect(async () => {
    // const movie = discoverMoviesCached.results.filter(
    //   (movie) => movie.id == id
    // );
    const response = await getMovieById(id);
    const imageResponse = await getMovieImageById(id);
    const videoResponse = await getVideoByMovieId(id);

    if (response.status === 404) {
      setError(true);
    }

    setMovie(await response.json());
    setImage(await imageResponse.json());
    setVideo(await videoResponse.json());

    if (imageResponse.status === 404) {
      setError(true);
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
    return (value * 10).toString()
  }

  const hasVideo = video?.results.length !== 0;
  console.log(movie);
  return loading ? (
    <RiseLoader color="#522B47" cssOverride={{ margin: "40% 30%", position: "absolute", top: "-50%", left: "10%%" }} loading={loading} size={50} />
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
              <ProgressBar width="230" trackWidth="10" percentage={percentConverter(movie.vote_average)} />
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
            <Transition
              in={hasVideo}
              timeout={1000}
              mountOnEnter
            >
              {state => {
                const frameClasses = state === 'entered' ? 'movieTrailer' : '';
                console.log('hi', state)
                return (

                  < iframe
                    className={frameClasses}
                    src={`${video_base_url}${video.results[0].key}?wmode=opaque`}
                    frameBorder="0"
                    width="600"
                    height="350"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                )
              }}
            </Transition>
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
