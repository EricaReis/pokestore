import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
  }  

  html, body, #root {
    height: 100vh;
  }

  body, input, button, textarea, h1 {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer
  }
`;
