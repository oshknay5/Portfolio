
import styled from "styled-components"
import photo from  '../../../assets/images/myPtoto.jpg'
import { FlexWrapper } from "../../../component/FlexWrapper"
 
 export const Main =()=>{
    return (
      <StaledMain>
        <FlexWrapper justify={'space-around'} align={'center'}>
            <div>
                <span>Hi There</span>
                <h2>I am Olga Shknay</h2>
                <MainTitle>Web Developer</MainTitle>
            </div>
            <Photo src={photo} alt="my photo"/>
        </FlexWrapper>
    </StaledMain>
    )
 }

const Photo = styled.img`
widht:350px;
height:430px;
object-fit:cover
`
const StaledMain = styled.section`
  min-height:100vh;
  background-color:rgb(236, 255, 220)
`
const MainTitle = styled.h1`

`