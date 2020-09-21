import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './restaurant-menu.scss';
import './menu-card.scss';
import DishCard from '../DishCard';
import DishModal from '../DishModal';
import Confirmation from '../common/Confirmation';

const DishSections = ({ sections }) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);

  const handleClick = (item) => {
    setChosenItem(item);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <article className="restaurant-menu restaurant__menu">
      {showModal && ReactDOM.createPortal(
        <DishModal
          dish={chosenItem}
          closeModal={toggleModal}
          setShowConfirmation={setShowConfirmation}
        />,
        document.body
      )}

      {showConfirmation && ReactDOM.createPortal(
        <Confirmation
          setShowConfirmation={setShowConfirmation}
        />,
        document.body
      )}

      {sections.map(({ uuid, title, items }) => (
        <section key={uuid} id={uuid} className="restaurant-menu__section">
          <h2 className="restaurant-menu__title">{title}</h2>

          <div className="restaurant-menu__cards">
            {items.map(item => (
              <DishCard
                key={item.uuid}
                item={item}
                onClick={handleClick}
              />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};

DishSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DishSections;
