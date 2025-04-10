import styled from "styled-components";
import { Icon } from "../../../component/icon/Icon";
import { FlexWrapper } from "../../../component/FlexWrapper";


type SkillPropsType = {
  iconId: string;
  title: string;

};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>

        <SkillTitle>{props.title}</SkillTitle>
     
      </FlexWrapper>
    </StyledSkill>
  );
};

const SkillTitle = styled.h2`
  margin: 70px 0 15px;
  text-align: center;
  text-transform:uppercase;
`;

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`;
 export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`;
