import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './no-such-page.scss';

const NoSuchPage = ({ info = '' }) => (
  <div className="no-such-page">
    <p className="no-such-page__p">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {info || <>Oh...<br />Seems that you reached the end of the Internet</>}
    </p>
    <Link className="no-such-page__button" to="/">To main page</Link>
  </div>
);

NoSuchPage.propTypes = {
  /* eslint-disable react/require-default-props */
  info: PropTypes.string,
  /* eslint-enable react/require-default-props */
};

export default NoSuchPage;
