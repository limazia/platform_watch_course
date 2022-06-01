import { createGlobalStyle } from "styled-components";

import background from "~/assets/images/bg.png";
import "~/assets/styles/styles.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    background: #fff;
    background-image: url(${background})
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #1DA1F2;
  }

  img,
  svg {
    display: block;
    width: 100%;
  }

  button:hover,
  button:focus,
  button:active,
  button:active:focus:not(:disabled):not(.disabled) {
    box-shadow: none !important;
    outline: 0 !important;
  }

  .btn:hover,
  .btn:focus,
  .btn:active,
  .btn:active:focus:not(:disabled):not(.disabled) {
    box-shadow: none !important;
    outline: 0 !important;
  }
`;