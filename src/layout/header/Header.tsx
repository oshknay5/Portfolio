import styled from "styled-components";
import { Logo } from "../../component/logo/Logo";
import { Container } from "../../component/Container";
import { FlexWrapper } from "../../component/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align="center">
          <Logo />
          <HeaderMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgb(31,31,32,0.9);
  padding:20px 0;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:9999;
`;
