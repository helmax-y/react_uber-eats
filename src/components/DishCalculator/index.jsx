import React from 'react';
import PropTypes from 'prop-types';

import RoundButton from '../common/RoundButton';
import Button from '../common/Button';

const DishCalculator = ({
  closeModal,
  totalPrice,
  quantity,
  recalculateQuantity,
  isButtonDisabled,
  setShowConfirmation,
}) => {
  const handleButtonClick = () => {
    closeModal();
    setShowConfirmation(true);
  };

  return (
    <div className="add">
      <RoundButton
        variation="remove"
        disabled={quantity === 1}
        onClick={() => recalculateQuantity(-1)}
      />
      <span className="add__quantity">{quantity}</span>
      <RoundButton
        variation="add"
        onClick={() => recalculateQuantity(1)}
      />
      <Button
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Add {quantity} to order
        <span className="add__total">
          {`${(totalPrice / 100).toFixed(2)} GBP`}
        </span>
      </Button>
    </div>
  );
};

DishCalculator.propTypes = {
  closeModal: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  recalculateQuantity: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  setShowConfirmation: PropTypes.func.isRequired,
};

export default DishCalculator;
