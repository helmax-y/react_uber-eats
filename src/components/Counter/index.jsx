import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import RoundButton from '../common/RoundButton';
import { DishCustomizationContext } from '../DishCustomizationList';

const Counter = ({ option, listUuid }) => {
  const {
    recalculteOptionsPrice,
    recalculateAmountOfChosenOptions,
    maximumReached,
  } = useContext(DishCustomizationContext);
  const [amount, setAmount] = useState(option.defaultQuantity);

  const handleClick = (newAmount, multiplier) => {
    recalculateAmountOfChosenOptions(multiplier);
    recalculteOptionsPrice(option.price * multiplier);
    setAmount(newAmount);
  };

  return (
    <div className="custom__label">
      {!!amount && (
        <>
          <RoundButton
            variation="remove"
            size="small"
            name={listUuid}
            disabled={amount === option.minPermitted}
            onClick={() => handleClick(amount - 1, -1)}
          />
          <span className="custom__amount">{amount}</span>
        </>
      )}

      <RoundButton
        variation="add"
        size="small"
        name={listUuid}
        disabled={option.isSoldOut
          || maximumReached
          || amount === option.maxPermitted}
        onClick={() => handleClick(amount + 1, 1)}
      />
      <p className="custom__item-name">{option.title}</p>
    </div>
  );
};

Counter.propTypes = {
  option: PropTypes.shape({}).isRequired,
  listUuid: PropTypes.string.isRequired,
};

export default Counter;
