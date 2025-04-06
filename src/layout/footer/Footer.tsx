import styled from "styled-components"
import { FlexWrapper } from "../../component/FlexWrapper"
import { Icon } from "../../component/icon/Icon"

export const Footer = () =>{
     return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Olga</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon  iconId={"in"}  width={"21px"} height={"21px"}  viewBox={"0 0 21px 21px"}/>
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
                </SocialList>

                <Copyright>© 2025 Olga Shknay, All Rights Reserved.</Copyright>

            </FlexWrapper>

        </StyledFooter>
     )
}
 const StyledFooter =styled.section`

 background-color:rgb(245, 240, 179);
 min-height:20vh;
`
const Name =styled.span``
const SocialList = styled.ul`
display:flex;
gap:30px;
`
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copyright= styled.small``