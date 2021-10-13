import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressScoreCircle from './ProgressScoreCircle';
import ProductionCompaniesPanel from './ProductionCompaniesPanel';
import {
  discoverMoviesCached,
  getMovieById,
  getMovieImageById,
  getVideoByMovieId,
} from '../api';
import StyledMovieProfile from './styles/StyledMovieProfile';

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

  const hasVideo = video?.results.length !== 0;

  return loading ? (
    <h1 style={{ backgroundColor: 'white' }}>Loading...</h1>
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
              <ProgressScoreCircle
                colour={movie.vote_average > 6 ? '#0ac036' : 'yellow'}
                percentage={movie.vote_average * 10}
              ></ProgressScoreCircle>
              <div className="highlightedData">- {movie.runtime}m</div>
              <div className="highlightedData">
                - {movie.release_date.substr(0, 4)}
              </div>
            </div>
            <div className="body-container">
              <p className="description">"{movie.overview}"</p>
            </div>
          </div>
          <div className="video-container">
            {hasVideo && (
              <iframe
                src={`${video_base_url}${video.results[0].key}?wmode=opaque`}
                frameBorder="0"
                width="600"
                height="350"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            )}
          </div>
        </div>
      </div>
      {/* <ProductionCompaniesPanel
        companies={movie.production_companies}
        width={'80px'}
      /> */}
    </StyledMovieProfile>
  );
};
