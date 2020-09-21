import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';

import StyledToggledInputs from './StyledToggledInputs';
import Input from '../common/Input';

const ToggledInputs = ({
  toggleInputs,
  inputQueryValue,
  handleQueryChange,
}) => (
  <StyledToggledInputs>
    <button
      type="button"
      className="close"
      onClick={toggleInputs}
    >
      <CloseIcon />
    </button>

    <Input
      type="text"
      placeholder="Search for restaurant or cuisine"
      className="icon icon--query"
      width="100%"
      borderBottom
      value={inputQueryValue}
      onChange={handleQueryChange}
    />

    <div className="input-group">
      <div className="first">
        <p>When</p>
        <Input type="time" />
      </div>

      <div className="second">
        <p>To</p>
        <Input
          type="text"
          className="icon icon--address"
        />
      </div>
    </div>
  </StyledToggledInputs>
);

ToggledInputs.propTypes = {
  toggleInputs: PropTypes.func.isRequired,
  inputQueryValue: PropTypes.string.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
};

export default ToggledInputs;
