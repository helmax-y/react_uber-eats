import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './restaurant-info.scss';

const RestaurantInfo = ({
  title,
  categories = [],
  address,
  image,
}) => {
  const { url } = useRouteMatch();

  return (
    <div
      className="restaurant__image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className="restaurant-info">
        <h1 className="restaurant-info__title">{title}</h1>
        <p className="restaurant-info__categories">{categories.join(' • ')}</p>
        {/* TODO: time shouldn't be hardcoded */}
        <p className="time">35 - 45 min</p>
        <address className="restaurant-info__address ">{address}</address>
        <span className="restaurant-info__point">•</span>
        <Link to={url} className="restaurant-info__link">More&nbsp;info</Link>
      </section>
    </div>
  );
};

RestaurantInfo.propTypes = {
  /* eslint-disable react/require-default-props */
  title: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.string,
  image: PropTypes.string,
  /* eslint-enable react/require-default-props */
};

export default RestaurantInfo;
