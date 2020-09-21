import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

import { GlobalContext } from '../GlobalState';
import Container from '../common/Container';
import StyledHeader from './StyledHeader';
import Logo from '../common/Logo';
import Input from '../common/Input';
import ToggledInputs from '../ToggledInputs';

const Header = () => {
  const { setRestaurantsQuery } = useContext(GlobalContext);
  const [inputQueryValue, setInputQueryValue] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const location = useLocation();

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  const handleQueryChange = (e) => {
    setInputQueryValue(e.target.value);

    if (location.pathname === '/restaurants') {
      setRestaurantsQuery(e.target.value.toLowerCase().trim());
    }
  };

  return (
    <Container
      type="sticky"
    >
      <StyledHeader>
        <Logo />

        <form className="form">
          {/* from mobile to laptop */}
          <div className="input-group input-group--mobile">
            <button
              type="button"
              onClick={toggleInputs}
            >
              <LocationOnOutlinedIcon />
            </button>
            <button
              type="button"
              onClick={toggleInputs}
            >
              <AccessTimeIcon />
            </button>
          </div>
          {/* ---------- */}

          {/* from laptop */}
          <div className="input-group input-group--laptop">
            <Input
              type="text"
              className="icon icon--address"
            />
            <Input
              type="time"
              margin="0 0 0 20px"
            />
          </div>
          {/* ---------- */}

          <div className="input-group">
            {/* from mobile to tablet */}
            <button
              type="button"
              className="button-search-icon"
              onClick={toggleInputs}
            >
              <SearchIcon />
            </button>
            {/* ---------- */}

            {/* from tablet */}
            <Input
              type="text"
              placeholder="Search"
              className="icon icon--query"
              value={inputQueryValue}
              onChange={handleQueryChange}
            />
            {/* ---------- */}

            <button
              type="button"
              className="sign-in"
            >
              Sign in
            </button>
          </div>
        </form>
      </StyledHeader>

      {showInputs && (
        <ToggledInputs
          toggleInputs={toggleInputs}
          inputQueryValue={inputQueryValue}
          handleQueryChange={handleQueryChange}
        />
      )
      }
    </Container>
  );
};

export default Header;
