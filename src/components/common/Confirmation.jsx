import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Modal from './Modal';

const shortLineAnimation = keyframes`
  from {
    width: 0;
  } 
  to {
    width: 65px;
  }
`;

const longLineAnimation = keyframes`
  from {
    width: 0;
  } 
  to {
    width: 125px;
  }
`;

const ModalContent = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 40vh auto 0;
  background-color: ${props => props.theme.primaryGreen};
  border-radius: 15px;

  .overflow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .gap {
    position: absolute;
    top: 12px;
    right: -10px;
    width: 50px;
    height: 35px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  .square {
    position: relative;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
  }

  .line {
    position: absolute;
    height: 15px;
    background-color: ${props => props.theme.primaryGreen};
    transform-origin: left;
    animation-duration: .3s;
    animation-fill-mode: forwards;
  }

  .shorter {
    top: 26px;
    left: 19px;
    transform: rotate(45deg);
    animation-name: ${shortLineAnimation};
  }

  .longer {
    top: 60%;
    left: 55px;
    transform: rotate(-45deg);
    animation-name: ${longLineAnimation};
    animation-delay: .3s;
  }
`;

const Confirmation = ({ setShowConfirmation }) => {
  const [toggleOpacity, setToggleOpacity] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowConfirmation(false), 1500);
    setTimeout(() => setToggleOpacity(true), 1000);
  }, []);

  return (
    <Modal toggleOpacity={toggleOpacity}>
      <ModalContent>
        <div className="overflow">
          <div className="gap" />
        </div>
        <div className="square">
          <div className="line shorter" />
          <div className="line longer" />
        </div>
      </ModalContent>
    </Modal>
  );
};

Confirmation.propTypes = {
  setShowConfirmation: PropTypes.func.isRequired,
};

export default Confirmation;
