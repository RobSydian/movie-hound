import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import StyledApp from './components/styles/StyledApp';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, getUsersFavList } from './firebase';
import { addToListActions } from './store/fav-movie-list-handler-slice';
import { useAuth } from './contexts/AuthContext';

export default () => {
  const userList = useSelector((state) => state.handleList.moviesList);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log(isMobile);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // window.addEventListener('resize', handleResize);
    if (currentUser) {
      getUsersFavList().then((res) => {
        res.map((mov) => dispatch(addToListActions.addMovie(mov)));
      });

      if (userList.length !== 0) {
        setDoc(doc(db, `users`, `${auth.currentUser.uid}`), {
          userList,
        });
      }
    }
  }, [userList]);

  return (
    <StyledApp>
      <Toaster />
      <Header />
      <Body />
      <Footer />
    </StyledApp>
  );
};
