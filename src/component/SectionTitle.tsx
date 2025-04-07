import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
margin-bottom:90px;
font-family:${theme.font.secondaryFont}
letter-spacing:5px;
font-size:36px;
font-weight:600px;
color:${theme.color.font};
text-align: center;

position:relative;

&::before{
content:"";
display:inline-block;
width:55px;
height:1px;
background-color:${theme.color.accent};

position:absolute;
left:50%;
transform:translate(-50%);
bottom:-30px;
}
`;
