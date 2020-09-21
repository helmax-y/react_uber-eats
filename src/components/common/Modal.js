import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${props => (props.toggleOpacity ? '0' : '1')};
  transition: opacity .5s;
`;
