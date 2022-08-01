import React, { useEffect } from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import StyledApp from './StyledApp';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export default () => {
  const userList = useSelector((state) => state.handleList.moviesList);

  useEffect(() => {
    // console.log(userList);

    if (userList.length !== 0) {
      setDoc(doc(db, `users`, `${auth.currentUser.uid}`), {
        userList,
      });
    }
  }, [userList]);

  return (
    <StyledApp>
      <AuthProvider>
        <Toaster />
        <Header />
        <Body />
        <Footer />
      </AuthProvider>
    </StyledApp>
  );
};
