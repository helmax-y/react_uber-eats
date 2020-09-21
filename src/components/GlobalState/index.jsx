import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurantsQuery, setRestaurantsQuery] = useState('');

  const contextValue = {
    isLoading,
    setIsLoading,
    restaurantsQuery,
    setRestaurantsQuery,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
