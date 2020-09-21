import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import DishCustomizationOption from '../DishCustomizationOption';

export const DishCustomizationContext = createContext();

const DishCustomizationList = ({
  list,
  recalculteOptionsPrice,
  minimumsReached,
  setMinimumsReached,
}) => {
  const [amountOfChosenOptions, setAmountOfChosenOptions] = useState(
    list.options.reduce((s, option) => option.defaultQuantity + s, 0)
  );
  const [checkedRadio, setCheckedRadio] = useState('');
  const [
    previouslyCheckedRadioPrice,
    setPreviouslyCheckedRadioPrice,
  ] = useState(null);

  useEffect(() => {
    if ((amountOfChosenOptions >= list.minPermitted)
      !== minimumsReached[list.uuid]) {
      setMinimumsReached({
        ...minimumsReached,
        [list.uuid]: amountOfChosenOptions >= list.minPermitted,
      });
    }
  });

  const recalculateAmountOfChosenOptions = (change) => {
    setAmountOfChosenOptions(amountOfChosenOptions + change);
  };

  const howManyToChoose = (min, max) => {
    if (min === 1 && max === 1) {
      return 'Required';
    }

    if (min === max) {
      return `Choose ${min}`;
    }

    if (min === 0) {
      return `Choose up to ${max}`;
    }

    return `Choose ${min} to ${max}`;
  };

  return (
    <DishCustomizationContext.Provider
      value={{
        recalculteOptionsPrice,
        recalculateAmountOfChosenOptions,
        maximumReached: amountOfChosenOptions === list.maxPermitted,
        checkedRadio,
        setCheckedRadio,
        previouslyCheckedRadioPrice,
        setPreviouslyCheckedRadioPrice,
      }}
    >
      <section key={list.uuid} className="custom">
        <div className="custom__head">
          <h2 className="custom__title">{list.title}</h2>
          <p className="custom__quantity">
            {howManyToChoose(list.minPermitted, list.maxPermitted)}
          </p>
        </div>

        <div className="custom__items">
          {list.options.map(option => (
            <DishCustomizationOption
              key={option.uuid}
              option={option}
              listUuid={list.uuid}
              listMin={list.minPermitted}
              listMax={list.maxPermitted}
            />
          ))}
        </div>
      </section>
    </DishCustomizationContext.Provider>
  );
};

DishCustomizationList.propTypes = {
  list: PropTypes.shape({}).isRequired,
  recalculteOptionsPrice: PropTypes.func.isRequired,
  minimumsReached: PropTypes.shape({}).isRequired,
  setMinimumsReached: PropTypes.func.isRequired,
};

export default DishCustomizationList;
