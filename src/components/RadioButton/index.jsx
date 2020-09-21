import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DishCustomizationContext } from '../DishCustomizationList';

const RadioButton = ({ option, listUuid }) => {
  const {
    recalculteOptionsPrice,
    recalculateAmountOfChosenOptions,
    checkedRadio,
    setCheckedRadio,
    previouslyCheckedRadioPrice,
    setPreviouslyCheckedRadioPrice,
  } = useContext(DishCustomizationContext);
  const handleChange = (e) => {
    if (previouslyCheckedRadioPrice !== null) {
      recalculteOptionsPrice(option.price - previouslyCheckedRadioPrice);
    } else {
      recalculateAmountOfChosenOptions(1);
      recalculteOptionsPrice(option.price);
    }

    setPreviouslyCheckedRadioPrice(option.price);
    setCheckedRadio(e.target.value);
  };

  return (
    <label className="custom__label">
      <input
        className="custom__real-radio"
        type="radio"
        name={listUuid}
        disabled={option.isSoldOut}
        value={option.uuid}
        checked={option.uuid === checkedRadio}
        onChange={handleChange}
      />
      <div className="custom__radio" />
      <p className="custom__item-name">{option.title}</p>
    </label>
  );
};

RadioButton.propTypes = {
  option: PropTypes.shape({}).isRequired,
  listUuid: PropTypes.string.isRequired,
};

export default RadioButton;
