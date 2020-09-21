import styled from 'styled-components';

export default styled.input`
  width: ${props => props.width || 'auto'};
  height: 48px;
  margin: ${props => props.margin || '0'};
  padding: 0 16px 0 38px;
  color: #1d1d1d;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  outline: none;
  ${props => props.borderBottom && `
    border: none;
    border-bottom: 1px solid #e0e0e0;
  `}

  &::placeholder {
    color: #e0e0e0;
  }
`;
