import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

const Loading = ({ isSmall = false }) => (
  <div className={isSmall ? 'small-loading' : 'loading'}>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Loading.propTypes = {
  /* eslint-disable react/require-default-props */
  isSmall: PropTypes.bool,
  /* eslint-enable react/require-default-props */
};

export default Loading;
