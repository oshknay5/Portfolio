import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

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
        <span> 0 </span>
        <span> 0 </span>
        <span> 0 </span>
        </Pagination>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const Pagination = styled.div`
  span {
    display: inline-box;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: rgb(231, 116, 179);
  }
`;

const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span``;
