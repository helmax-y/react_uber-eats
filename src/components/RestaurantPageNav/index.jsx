import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import './restaurant-nav.scss';

const RestaurantPageNav = ({ titles }) => (
  <nav className="restaurant__nav">
    <ul className="restaurant-nav">
      {titles.map(({ uuid, title }) => (
        <li key={uuid} className="restaurant-nav__item">
          <HashLink
            className="restaurant-nav__link"
            to={{ hash: uuid }}
          >
            {title}
          </HashLink>
        </li>
      ))}
    </ul>
  </nav>
);

RestaurantPageNav.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RestaurantPageNav;
