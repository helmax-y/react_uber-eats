/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

import address from 'assets/svg/address.svg';
import query from 'assets/svg/query.svg';

export default styled.header`
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.maxContentWidth};
  margin: 0 auto;
  padding: 16px 0;

  .logo {
    min-width: 25%;
  }

  .form {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }

  .input-group {
    display: flex;
    align-items: center;
    margin-left: 5px;

    &--mobile {
      justify-content: space-between;
      margin-left: 20px;

      @media (min-width: ${props => props.theme.laptop}) {
        display: none;
      }
    }

    &--laptop {
      @media (max-width: ${props => props.theme.toLaptop}) {
        display: none;
      }
    }
  }

  .button-search-icon {
    @media (min-width: ${props => props.theme.tablet}) {
      display: none;
    }
  }

  .icon {
    background-repeat: no-repeat;
    background-position: top 15px left 13px;

    &--address {
      background-image: url(${address});
    }

    &--query {
      background-image: url(${query});

      @media (max-width: ${props => props.theme.toTablet}) {
        display: none;
      }
    }
  }

  .sign-in {
    color: #1f1f1f;
    white-space: nowrap;

    @media (min-width: ${props => props.theme.tablet}) {
      margin-left: 35px;
    }
  }
`;
