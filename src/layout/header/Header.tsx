import styled from "styled-components";
import { Logo } from "../../component/logo/Logo";
import { Menu } from "../../component/menu/Menu";
import { Container } from "../../component/Container";
import { FlexWrapper } from "../../component/FlexWrapper";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align="center">
          <Logo />
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: pink;
`;
