import styled from "styled-components"
import { FlexWrapper } from "../../component/FlexWrapper"
import { Icon } from "../../component/icon/Icon"
import { theme } from "../../styles/Theme"

export const Footer = () =>{
     return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Olga</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon  iconId={"ln"}  width={"21px"} height={"21px"}  viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon  iconId={"telegram"}  width={"21px"} height={"21px"}  viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon  iconId={"instagram"}  width={"21px"} height={"21px"}  viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                       <SocialItem>
                        <SocialLink>
                            <Icon  iconId={"facebook"}  width={"21px"} height={"21px"}  viewBox={"0 0 17 11"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>

                <Copyright>© 2025 Olga Shknay, All Rights Reserved.</Copyright>

            </FlexWrapper>

        </StyledFooter>
     )
}
 const StyledFooter =styled.section`
background-color:${theme.color.primaryBg};
padding:40px 0;
`
const Name =styled.span`
font-family: ${theme.font.secondaryFont};
font-weight: 700;
font-size: 22px;
letter-spacing: 0.14em;
`
const SocialList = styled.ul`
display:flex;
gap:20px;
margin:30px 0;
`
const SocialItem = styled.li``

const SocialLink = styled.a`
background-color:rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 35px;
height: 35px;
display:flex;
justify-content:center;
align-items:center;
color:${theme.color.accent};

&:hover{
color:${theme.color.primaryBg};
background-color:${theme.color.accent};
transform:translateY(-4px);
}


`

const Copyright= styled.small`
font-weight: 400;
font-size: 12px;
text-align: center;
color: rgb(255, 255, 255);
opacity:0.5;
`