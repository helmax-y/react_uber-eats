import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';

export const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'large' ? '50px' : '24px')};
  height: ${props => (props.size === 'large' ? '50px' : '24px')};
  line-height: 1;
  border-radius: 50%;
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);

  ${props => (props.size === 'large'
    ? `
      background-color: ${props.theme.backgroundGrey};
    `
    : `
      border: 1px solid #d3d3d3;
    `) + (props.variation === 'close'
    ? `
      position: absolute;
      top: 25px;
      right: 25px;
    `
    : '')}

  &:hover:not(:disabled) {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const RoundButton = ({
  variation,
  disabled = false,
  onClick,
  name = '',
  size = 'large',
}) => {
  const renderContent = (type) => {
    switch (type) {
      case 'add':
        return <AddIcon fontSize={size} />;
      case 'remove':
        return <RemoveIcon fontSize={size} />;
      case 'close':
        return <CloseIcon fontSize={size} />;
      default:
        return null;
    }
  };

  return (
    <Circle
      variation={variation}
      size={size}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {renderContent(variation)}
    </Circle>
  );
};

RoundButton.propTypes = {
  /* eslint-disable react/require-default-props */
  variation: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  size: PropTypes.string,
  /* eslint-enable react/require-default-props */
};

export default RoundButton;
