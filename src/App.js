import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import StyledApp from './StyledApp';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

export default () => (
  <StyledApp>
    <AuthProvider>
      <Toaster />
      <Header />
      <Body />
      <Footer />
    </AuthProvider>
  </StyledApp>
);
