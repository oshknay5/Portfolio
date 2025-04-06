import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

body{
  font-family:"Poppins", system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: ${theme.color.font}
 
}

a {
  text-decoration:none;
  }

ul{
  list-style:none;
  }

button{
  background-color: unset;
  border:none
  }

section:nth-of-type(odd) {
   background-color: ${theme.color.primaryBg}
  }

section:nth-of-type(even){
   background-color: ${theme.color.secondaryBg}
  }

`;
