import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import Counter from '../Counter';

const DishCustomizationOption = ({
  option,
  listUuid,
  listMin,
  listMax,
}) => {
  const renderProperInput = () => {
    const props = {
      option,
      listUuid,
    };

    if (listMin === 1 && listMax === 1) {
      return <RadioButton {...props} />;
    }

    if (option.maxPermitted > 1) {
      return <Counter {...props} />;
    }

    return <Checkbox {...props} />;
  };

  const optionClass = ClassNames(
    { custom__item: true },
    { 'custom__item--inactive': option.isSoldOut }
  );

  return (
    <div className={optionClass}>
      {renderProperInput()}

      {/* eslint-disable-next-line no-nested-ternary */}
      {option.isSoldOut
        ? <span>Is Sold Out</span>
        : option.price
          // eslint-disable-next-line react/jsx-one-expression-per-line
          ? <span>+ £{(option.price / 100).toFixed(2)}</span>
          : null}
    </div>
  );
};

DishCustomizationOption.propTypes = {
  option: PropTypes.shape({}).isRequired,
  listUuid: PropTypes.string.isRequired,
  listMin: PropTypes.number.isRequired,
  listMax: PropTypes.number.isRequired,
};

export default DishCustomizationOption;
