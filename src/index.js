import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import './styles/index.scss';
import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';

ReactDOM.render(
  <Provider store={store()}>
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
