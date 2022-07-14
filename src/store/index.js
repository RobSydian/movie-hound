import { configureStore } from "@reduxjs/toolkit";

import movieListHandler from './fav-movie-list-handler-slice'

const store = configureStore({
    reducer: { handleList: movieListHandler.reducer }
})

export default store;