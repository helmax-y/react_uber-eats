import React from 'react';
import PropTypes from 'prop-types';

const DishCard = ({ item, onClick }) => (
  // eslint-disable-next-line
  <section
    className="menu-card"
    onClick={() => onClick(item)}
  >
    <div className="menu-card__body">
      <div>
        <h3 className="menu-card__title">
          {item.title.slice(0, 60)}
          {item.title.length >= 60 && '...'}
        </h3>
        <p className="menu-card__description">
          {item.description && item.description.slice(0, 60)}
          {item.description
            && item.description.length >= 60
            && '...'}
        </p>
      </div>

      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p className="menu-card__price">£ {(item.price / 100).toFixed(2)}</p>
    </div>

    {item.imageUrl && (
      <div className="menu-card__rightside">
        <img
          className="menu-card__image"
          src={item.imageUrl}
          alt={item.title}
        />
      </div>
    )}
  </section>
);

DishCard.propTypes = {
  item: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DishCard;
