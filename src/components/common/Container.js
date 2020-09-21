import styled from 'styled-components';

export default styled.div`
  padding: 0 10px;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 0 20px;
  }

  @media (min-width: ${props => props.theme.laptop}) {
    padding: 0 35px;
  }

  ${props => props.type === 'sticky' && `
    position: sticky;
    top: 0;
    background-color: #fff;
  `}
`;
