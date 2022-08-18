import { configureStore } from '@reduxjs/toolkit';

import movieListHandler from './fav-movie-list-handler-slice';
import mobileStateHandler from './mobile-state-slice';

const store = configureStore({
  reducer: {
    handleList: movieListHandler.reducer,
    handleMobile: mobileStateHandler.reducer,
  },
});

export default store;
