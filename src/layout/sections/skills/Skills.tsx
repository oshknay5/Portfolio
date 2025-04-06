import styled from "styled-components"
import { FlexWrapper } from "../../../component/FlexWrapper"
import {SectionTitle} from "../../../component/SectionTitle"
import { Skill } from "./Skill"

   export const Skills =()=>{
    return (
         <StyledSkills>
             <SectionTitle>My skills</SectionTitle> 

             <FlexWrapper wrap ={'wrap'} justify={"space-between"}>
              <Skill iconId= {'code'} title ={'HTML5'}  description={"LOrerkkkkkkkkkkkkk"}/>
              <Skill iconId= {'figma'} title ={'Figma'}  description={"LOrerkkkkkkkkkkkkk"}/>
              <Skill iconId= {'css3'} title ={'CSS3'}  description={"LOrerkkkkkkkkkkkkk"}/>
              <Skill iconId= {'react'} title ={'REACT'}  description={"LOrerkkkkkkkkkkkkk"}/>
              <Skill iconId= {'code'} title ={'HTML5'}  description={"LOrerkkkkkkkkkkkkk"}/>
              <Skill iconId= {'code'} title ={'HTML5'}  description={"LOrerkkkkkkkkkkkkk"}/>
             </FlexWrapper>

         </StyledSkills>
    )
  }
  const StyledSkills = styled.section`
  background-color:rgb(248, 179, 179);
  min-height:100vh;
  `

