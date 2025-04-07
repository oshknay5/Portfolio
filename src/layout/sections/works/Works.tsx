import styled from "styled-components";
import { SectionTitle } from "../../../component/SectionTitle";
import { FlexWrapper } from "../../../component/FlexWrapper";
import { Work } from "./work/Work";
import sotialImg from "../../../assets/images/Rectangle 14.png";
import sotialImg2 from "../../../assets/images/Rectangle 15.png";
import { Container } from "../../../component/Container";
import { TabMenu } from "./tabMenu/TabMenu";
import { Link } from "../../../component/Link";

const workItems = ["All", "Landing page", "react", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container> 
      <SectionTitle>My works </SectionTitle>
      <TabMenu menuItems={workItems} />
      <FlexWrapper justify={"space-between"}>
        <Work
          title={"Social Network"}
          src={sotialImg}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <Work
          title={"Timer"}
          src={sotialImg2}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
      </FlexWrapper>
      </Container>

    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: rgb(212, 240, 181);
  min-height: 100vh;
`;
