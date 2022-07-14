import { configureStore } from "@reduxjs/toolkit";

import movieListHandler from './fav-movie-list-handler-slice'

const store = configureStore({
    reducer: { addToList: movieListHandler.reducer }
})

export default store;