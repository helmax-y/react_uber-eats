import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';
import './custom.scss';
import './add.scss';
import { loadMenuItems } from '../../API/loadData';
import Loading from '../Loading';
import RoundButton from '../common/RoundButton';
import DishModalTopPart from '../DishModalTopPart';
import DishCustomizationList from '../DishCustomizationList';
import DishInstructions from '../DishInstructions';
import DishCalculator from '../DishCalculator';

const DishModal = ({ dish, closeModal, setShowConfirmation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [
    dishWithCustomization,
    setDishWithCustomization,
  ] = useState({ customizationsList: [] });
  const [quantity, setQuantity] = useState(1);
  const [optionsPrice, setOptionsPrice] = useState(0);
  const [minimumsReached, setMinimumsReached] = useState(Object.fromEntries(
    dishWithCustomization.customizationsList.map(list => [list.uuid, false])
  ));

  useEffect(() => {
    setIsLoading(true);
    loadMenuItems(dish.uuid)
      .then(({ data }) => setDishWithCustomization(data))
      .finally(() => setIsLoading(false));

    document.body.style.overflowY = 'hidden';
    document.addEventListener('keyup', closeOnEsc);

    return () => {
      document.body.style.overflowY = 'visible';
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, []);

  const closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const recalculateQuantity = (side) => {
    setQuantity(quantity + side);
  };

  const recalculteOptionsPrice = (change) => {
    setOptionsPrice(optionsPrice + change);
  };

  return (
    // eslint-disable-next-line
    <div
      className="modal"
      onClick={e => e.target === e.currentTarget && closeModal()}
    >
      <article className="modal__content">
        <RoundButton
          variation="close"
          onClick={closeModal}
        />

        <DishModalTopPart
          image={dishWithCustomization.imageUrl || dish.imageUrl}
          title={dishWithCustomization.title || dish.title}
          description={dishWithCustomization.itemDescription
            || dish.description}
        />

        {isLoading
          ? <Loading isSmall />
          : dishWithCustomization.customizationsList.map(list => (
            <DishCustomizationList
              key={list.uuid}
              list={list}
              recalculteOptionsPrice={recalculteOptionsPrice}
              minimumsReached={minimumsReached}
              setMinimumsReached={setMinimumsReached}
            />
          ))
        }

        <DishInstructions />
        <DishCalculator
          closeModal={closeModal}
          totalPrice={(dish.price + optionsPrice) * quantity}
          quantity={quantity}
          recalculateQuantity={recalculateQuantity}
          isButtonDisabled={!Object.values(minimumsReached)
            .every(reached => reached)}
          setShowConfirmation={setShowConfirmation}
        />
      </article>
    </div>
  );
};

DishModal.propTypes = {
  dish: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
  setShowConfirmation: PropTypes.func.isRequired,
};

export default DishModal;
