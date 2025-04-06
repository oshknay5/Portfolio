import styled from "styled-components";

type WorkPropsType = {
title:string;
text:string;
src:string;
}


export const Work =(props:WorkPropsType)=>{
return(
       <StyledWork>
           <Image src={props.src}></Image>
           <Title> {props.title}</Title>
           <Text>{props.text}</Text>
           <Link href='#'>demo</Link>
           <Link href='#'>code</Link>
       </StyledWork>
)
}
const StyledWork = styled.div`
background-color:rgb(233, 192, 238);
max-width:540px;
width:100%;
`
 const Image = styled.img`
 width:100%;
 height:260px;
 oblect-fit:cover;
 `
 const Title = styled.h3`
 `
  const Text = styled.p`
 `
  const Link = styled.a`
  `
 