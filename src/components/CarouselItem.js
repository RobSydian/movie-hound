import React, { useState } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToListActions } from '../store/fav-movie-list-handler-slice';
import StyledCarouselItem from './styles/StyledCarouselItem';
import Notification from './UI/Notification';

export default ({ id, title, width, image, isListView }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.handleList.favMovies);

  const showIcon = () => {
    setShow(true);
  };

  const hideIcon = () => {
    setShow(false);
  };

  const removeItem = (event) => {
    event.preventDefault();
    if (favMovies.includes(id)) {
      dispatch(addToListActions.removeMovie(id));

      Notification({
        message: 'Successfully removed from list',
        classes: 'notification-success',
      });
    }
  };

  return (
    <StyledCarouselItem width={width} id={id} key={id}>
      {isListView && (
        <>
          <div className="container">
            <div
              className="overlay"
              onMouseOver={showIcon}
              // onMouseEnter={showIcon}
              onMouseOut={hideIcon}
              // onMouseLeave={hideIcon}
            ></div>
            <FaMinusCircle
              onMouseOver={showIcon}
              id={title}
              className={show ? 'icon' : 'hide'}
              onClick={removeItem}
              size="30px"
            />
            <img className="image-with-overlay" src={image} alt={title} />
          </div>
        </>
      )}
      {!isListView && (
        <img className="image-no-overlay" src={image} alt={title} />
      )}
    </StyledCarouselItem>
  );
};
