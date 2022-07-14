import React from "react";
import { useSelector } from "react-redux";

import StyledMyList from "./styles/StyledMyList";
import Carousel from "./UI/Carousel";


export default function MyList() {
    const moviesList = useSelector(state => state.addToList.moviesList);
    const image_base_url = 'https://image.tmdb.org/t/p';
    const image_width = 300;

    console.log(moviesList)
    return (
        <StyledMyList>
            <h1>My List</h1>
            <Carousel items={moviesList} />

        </StyledMyList>
    )
}
