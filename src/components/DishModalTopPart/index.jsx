import React from 'react';
import PropTypes from 'prop-types';

const DishModalTopPart = ({ image, title, description }) => (
  <>
    {image && (
      <img
        src={image}
        alt={title}
        className="modal__img"
      />
    )}

    <div className="modal__container">
      <h1 className="modal__title">{title}</h1>
      <p className="modal__description">{description}</p>
    </div>
  </>
);

DishModalTopPart.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DishModalTopPart;
