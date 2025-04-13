import styled from "styled-components"
import { Button } from "../../../component/Button"
import { SectionTitle } from "../../../component/SectionTitle"
import { Container } from "../../../component/Container"
import { FlexWrapper } from "../../../component/FlexWrapper"

 export const Slogan = ()=>{
     return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>I am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
                </FlexWrapper>
           
            </Container>
            
        </StyledSlogan>
     )
 }
 const StyledSlogan = styled.section`
 min-height:30vh;
 background-color:rgb(245, 223, 239)
 `