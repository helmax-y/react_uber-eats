import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body,
  a,
  button,
  input {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    line-height: 1;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  .width {

    &--footer {
      background-color: #262626;
    }
  }
`;
