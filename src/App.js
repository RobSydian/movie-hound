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
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import { mobileStateActions } from './store/mobile-state-slice';

export default () => {
  const userList = useSelector((state) => state.handleList.moviesList);
  const mobileState = useSelector((state) => state.handleMobile.isMobile);

  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const checkMobileState = useCheckMobileScreen();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      dispatch(mobileStateActions.isMobile(true));
    } else {
      dispatch(mobileStateActions.isMobile(false));
    }
  };

  useEffect(() => {
    dispatch(mobileStateActions.isMobile(checkMobileState));
    console.log(checkMobileState);
    window.addEventListener('resize', handleResize);
  }, [mobileState]);

  useEffect(() => {
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
