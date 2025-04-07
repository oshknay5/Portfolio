import styled from "styled-components";
import { FlexWrapper } from "../../../component/FlexWrapper";
import { SectionTitle } from "../../../component/SectionTitle";
import { Skill } from "./Skill";
import { Container } from "../../../component/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My skills</SectionTitle>

        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill
            iconId={"code"}
            title={"HTML5"}
           
          />
          <Skill
            iconId={"figma"}
            title={"Figma"}
           
          />
          <Skill
            iconId={"css3"}
            title={"CSS3"}
           
          />
          <Skill
            iconId={"react"}
            title={"REACT"}
        
          />
          <Skill
            iconId={"st-comp"}
            title={"styled-components"}
          
          />
          <Skill
            iconId={"TS"}
            title={"TypeScript"}
          
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};
const StyledSkills = styled.section``;
