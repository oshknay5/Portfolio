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
  font-family:${theme.font.primaryFont};
  line-height: 1.2;
  font-weight: 400;
  color: ${theme.color.font};
}

a {
  text-decoration:none;
  color: ${theme.color.font};
  }

ul{
  list-style:none;
  }

button{
  background-color: unset;
  border:none;
  }

section{
   padding:10px 0;
   }

section:nth-of-type(odd) {
   background-color: ${theme.color.primaryBg};
  }

section:nth-of-type(even){
   background-color: ${theme.color.secondaryBg};
  }

h3{
  font-family:${theme.font.secondaryFont};
  font-weight:700;
  font-size:16px;
  leter-spacing:1px;
}

p{
   font-size:14px;
   font-weight:400;
   line-height:1.4;
}
`;
