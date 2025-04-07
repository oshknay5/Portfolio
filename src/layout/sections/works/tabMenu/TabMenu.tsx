import styled from "styled-components";
import { Link } from "../../../../component/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};
const StyledTabMenu = styled.nav`
 
ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom:40px;
  }
`;

const ListItem = styled.li``;
