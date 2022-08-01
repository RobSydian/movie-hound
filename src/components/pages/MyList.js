import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { auth, db } from '../../firebase';

import StyledMyList from '../styles/StyledMyList';
import Carousel from '../UI/Carousel';

export default function MyList() {
  const moviesList = useSelector((state) => state.handleList.moviesList);
  const [favMovies, setFavMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const image_base_url = 'https://image.tmdb.org/t/p';
  const image_width = 300;

  const getData = async () => {
    const myListCol = doc(db, 'users', `${auth.currentUser.uid}`);
    const listSnapshot = await getDoc(myListCol);
    console.log(listSnapshot.data());
    // const resultList = listSnapshot.docs.map((doc) => doc.data());
    if (listSnapshot.data()) {
      const resultList = await listSnapshot.data()['userList'];
      setFavMovies(resultList);
    }
  };

  useEffect(() => {
    const userData = getData();
    setIsLoading(false);
  }, []);

  return (
    <StyledMyList>
      <h1>My List</h1>
      {!isLoading && favMovies && favMovies.length > 0 ? (
        <Carousel items={favMovies} isListView={true} />
      ) : (
        <h2>The Hound could not sniff any movies on your list.</h2>
      )}
    </StyledMyList>
  );
}
