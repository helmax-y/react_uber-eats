/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

import address from 'assets/svg/address.svg';
import query from 'assets/svg/query.svg';

export default styled.section`
  position: relative;
  padding: 15px 0;

  @media (min-width: ${props => props.theme.laptop}) {
    display: none;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
  }

  .icon {
    background-repeat: no-repeat;
    background-position: top 15px left 13px;

    &--address {
      background-image: url(${address});
    }

    &--query {
      background-image: url(${query});

      @media (min-width: ${props => props.theme.tablet}) {
        display: none;
      }
    }
  }

  .input-group {
    display: flex;

    @media (max-width: ${props => props.theme.toTablet}) {
      margin-top: 15px;
    }

    .second {
      margin-left: 20px;
    }
  }
`;
