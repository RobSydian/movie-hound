import { useSelector } from "react-redux";
import { useEffect } from "react";

import StyledMyList from "./styles/StyledMyList";

export default function MyList() {
    const moviesList = useSelector(state => state.addToList.moviesList);

    console.log(moviesList)
    return (
        <StyledMyList>
            <h1>MyList</h1>
            {/* {moviesList} */}
        </StyledMyList>
    )
}
