import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle';
import GlobalState from '../GlobalState';
import Header from '../Header';
import Router from '../Router';
import Footer from '../Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalState>
      <Header />
      <Router />
      <Footer />
    </GlobalState>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
