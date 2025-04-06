import styled from "styled-components";
import { SectionTitle } from "../../../component/SectionTitle";
import { FlexWrapper } from "../../../component/FlexWrapper";
import { Icon } from "../../../component/icon/Icon";
import { Slider } from "../../../component/slider/Slider";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle> Testimony </SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={"quote"}/>
        <Slider/>
      </FlexWrapper>
    </StyledTestimony>
  );
};
const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: rgb(200, 247, 247);
  
`;
