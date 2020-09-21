import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './card.scss';

const RestaurantCard = ({
  uuid,
  image,
  title,
  categories,
  time,
}) => {
  const history = useHistory();

  const openRestaurantPage = () => {
    // title instead of uuid in url
    // history.push(`/restaurants/${title.replace(/ /g, '-')}`);
    history.push(`/restaurants/${uuid}`);
  };

  return (
    // eslint-disable-next-line
    <article
      className="card"
      onClick={openRestaurantPage}
    >
      <img className="card__image" src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      <section className="card__categories">
        {categories.join(' • ')}
      </section>
      <section className="time">
        {time.replace('–', ' – ')}
      </section>
    </article>
  );
};

RestaurantCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
};

export default RestaurantCard;
