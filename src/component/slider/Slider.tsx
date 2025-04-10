import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper >
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            iste cum necessitatibus distinctio, similique fuga odit cumque
            numquam labore consectetur minima magnam ipsam impedit excepturi
            nisi iure praesentium? Iste, quam.
          </Text>
          <Name>@Olga</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
      <span className={"active"}>  </span>
        <span>  </span>
        </Pagination>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: rgba(255,255,255,0.5);
    border-radius:20px;

    &+span{
    margin-left:5px;
    }

    &.active{
    background-color: ${theme.color.accent};
    width: 20px;
    }

  }
`;

const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span`
font-family:${theme.font.secondaryFont};
font-weight:600;
font-size:16px;
letter-spacing:1px;
text-transform: uppercase;
display:inline-block;
margin:22px 0 42px;

`;
