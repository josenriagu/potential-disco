// Create global styles using styled components to be injected into components.
import { createGlobalStyle } from "styled-components";

import { screens } from "./variables";

const GlobalStyle = createGlobalStyle`
:root {
   font-size: 62.5%;
}
*,  *::after, *::before {
   box-sizing: border-box;
}
html {
   scroll-behavior: smooth;
}
body{
   background-color: ${(props) => props.theme.background};
   color: ${(props) => props.theme.text};
   text-align: left;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Nunito Sans', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
h4 {
   font-size: 2.6rem;
   margin: 0;
   @media ${screens.mobile}{
      font-size: 2.2rem;
   }
}
h5 {
   font-size: 2.0rem;
   margin: 0;
}
p, span{
   font-size: 1.4rem;
   @media ${screens.mobile}{
      font-size: 1.4rem;
   }
}
input {
   font-size: 1.5rem;
   color: ${(props) => props.theme.text};
   ::placeholder{
      font-family: 'Nunito Sans', sans-serif;
      color: ${(props) => props.theme.placeholder}
   }
   border: none;
   background: ${(props) => props.theme.elements};
   :focus {
      outline: none;
   }
}
datalist {
   background: ${(props) => props.theme.elements} !important;
   color: ${(props) => props.theme.text};
}
`;

export default GlobalStyle;
