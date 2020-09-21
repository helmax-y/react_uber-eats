/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/svg/logoBlack.svg';

const StyledLink = styled(Link)`
  display: inline-block;
`;

const Logo = () => (
  <div className="logo">
    <StyledLink to="/restaurants">
      <img src={logo} alt="Uber Eats logotype" />
    </StyledLink>
  </div>
);

export default Logo;
