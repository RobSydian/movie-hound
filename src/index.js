import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/AuthContext';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from 'react-router-scroll-top';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ParallaxProvider>
            <Router>
              <ScrollToTop>
                <App />
              </ScrollToTop>
            </Router>
          </ParallaxProvider>
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
