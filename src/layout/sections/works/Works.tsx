import styled from "styled-components"
import { SectionTitle } from "../../../component/SectionTitle"
import { Menu } from "../../../component/menu/Menu"
import { FlexWrapper } from "../../../component/FlexWrapper"
import { Work } from "./work/Work"
import sotialImg from "../../../assets/images/Rectangle 14.png"
import sotialImg2 from "../../../assets/images/Rectangle 15.png"


  const workItems = ["All","Landing page","react", "SPA" ]

 export const Works =()=>{
    return(
      <StyledWorks>
        <SectionTitle>My works </SectionTitle>
        <Menu menuItems = {workItems}/>
        <FlexWrapper justify={"space-around"}>
          <Work  title={"Social Network"} 
                 src ={sotialImg}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
         <Work title={"Timer"} 
                 src ={sotialImg2}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        </FlexWrapper>

      </StyledWorks>
    )
  }

  const StyledWorks = styled.section`
  background-color:rgb(212, 240, 181);
  min-height:100vh;
  `