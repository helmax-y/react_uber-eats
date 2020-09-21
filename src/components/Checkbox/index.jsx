import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { DishCustomizationContext } from '../DishCustomizationList';

const Checkbox = ({ option, listUuid }) => {
  const {
    recalculteOptionsPrice,
    recalculateAmountOfChosenOptions,
    maximumReached,
  } = useContext(DishCustomizationContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    recalculateAmountOfChosenOptions(e.target.checked ? 1 : -1);
    recalculteOptionsPrice(e.target.checked ? +option.price : -option.price);
    setIsChecked(e.target.checked);
  };

  return (
    <label className="custom__label">
      <input
        className="custom__real-checkbox"
        type="checkbox"
        name={listUuid}
        checked={isChecked}
        disabled={option.isSoldOut || (maximumReached && !isChecked)}
        onChange={handleChange}
      />
      <div className="custom__checkbox" />
      <p className="custom__item-name">{option.title}</p>
    </label>
  );
};

Checkbox.propTypes = {
  option: PropTypes.shape({}).isRequired,
  listUuid: PropTypes.string.isRequired,
};

export default Checkbox;
