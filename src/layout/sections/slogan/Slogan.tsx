import styled from "styled-components"
import { Button } from "../../../component/Button"
import { SectionTitle } from "../../../component/SectionTitle"

 export const Slogan = ()=>{
     return (
        <StyledSlogan>
            <SectionTitle>I am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
     )
 }
 const StyledSlogan = styled.section`
 min-height:30vh;
 background-color:rgb(245, 223, 239)
 `