
import styled from "styled-components"
import photo from  '../../../assets/images/myPtoto.jpg'
import { FlexWrapper } from "../../../component/FlexWrapper"
import { Container } from "../../../component/Container"
import { theme } from "../../../styles/Theme"
 
 export const Main =()=>{
    return (
      <StaledMain>
        <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
            <div>
                <SmallText>Hi There</SmallText>
                <Name>I am <span> Olga Shknay </span> </Name>
                <MainTitle>Web Developer</MainTitle>
            </div>
             <PhotoWrapper> 
              <Photo src={photo} alt="my photo"/>
            </PhotoWrapper>
           
        </FlexWrapper>
        </Container>
        
    </StaledMain>
    )
 }


const StaledMain = styled.section`
  min-height:100vh;
  display:flex;

`
const PhotoWrapper = styled.div`
position:relative;
z-index:0;

&::before {
content:"";
width:360px;
height:450px;
border:5px solid ${theme.color.accent};

position:absolute;
top: 22px;
left: 22px;
z-index:-1;
}
`
const Photo = styled.img`
width:340px;
height:430px;
object-fit:cover;
`
const MainTitle = styled.h1`
font-size: 27px;
font-weight:400;
`
const Name = styled.h2`
font-family: ${theme.font.secondaryFont};
font-weight:700;
font-size: 50px;
letter-spacing: 0.05em;
margin:10px 0;

  span {
position:relative;
z-index:0;

&::before{
content:"";
display:inline-block;
width:100%;
height:20px;
background-color:${theme.color.accent};

position:absolute;
bottom:0;
z-index:-1;
}
}
`

const SmallText = styled.span`
font-size: 14px;
`