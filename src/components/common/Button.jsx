import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, disabled }) => (
  <button
    type="button"
    className="add__submit"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
