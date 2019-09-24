import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-size: 1.6em;
}
`;
