import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: radial-gradient(at top left, rgba(146,43,225,1) 0%, rgba(43,9,107,1) 100%);
    background-repeat: no-repeat ;
  };
  html, body {
      min-height: 100%;
  }
  * {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Montserrat';
  }
  p {
      margin: 16px auto;
      line-height: 1.5em;
  }
`;