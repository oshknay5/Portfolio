import styled from "styled-components"
import { Icon } from "../../../component/icon/Icon"

 type SkillPropsType ={
    iconId:string;
    title:string;
    description:string;
 }
 
 
  export const Skill = (props: SkillPropsType ) => {
       return (
        <StyledSkill >
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>       

 )
 }
  const SkillTitle = styled.h2`
  color:rgb(240, 56, 179);
  text-align:center;
  `
  const SkillText =styled.p`
  
  `
  const StyledSkill = styled.div`
  widht:33%;
  `