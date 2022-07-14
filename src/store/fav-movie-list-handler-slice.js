import { createSlice } from "@reduxjs/toolkit";

const movieListHandler = createSlice({
    name: 'user movies list',
    initialState: {
        moviesList: [],
    },
    reducers: {
        addMovie(state, action) {
            const newMovie = action.payload;
            console.log(newMovie.id)

            const existingMovie = state.moviesList.find(
                movie => movie.id === newMovie.id
            )
            if (!existingMovie) {
                state.moviesList.push(newMovie)
            } else {
                console.log('Movie already selected');
            }
        },
        removeMovie(state, action) {
            const id = action.payload;
            const existingMovie = state.moviesList.find(movie => movie.id === id);

            if (existingMovie) {
                state.moviesList = state.moviesList.filter(movie => movie.id === id)
            } else {
                console.log('Dunno wot hapnd')
            }
        }
    }
})

export const addToListActions = movieListHandler.actions;

export default movieListHandler;