import styled from "styled-components";
import { SectionTitle } from "../../../component/SectionTitle";
import { Button } from "../../../component/Button";
import { Container } from "../../../component/Container";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"} />
        <Field placeholder={"subject"} />
        <Field as={"textarea"} placeholder={"message"} />
        <Button type={"submit"}>Send massage</Button>
      </StyledForm>
      </Container>
      
    
   
    </StyledContact>
  );
};
const StyledContact = styled.section`
  
`;
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 16px;
  margin: 0 auto;

textarea{
resize:none;
height:150px;
}

`;
const Field = styled.input`
 width: 100%;
 background-color:${theme.color.secondaryBg};
 border:1px solid ${theme.color.borderColor};
 color:${theme.color.font};
 padding:7px 15px;
 font-weight:400;
 font-size:12px;
 letter-spacing:0.05em;
 font-family:${theme.font.primaryFont};

 &::placeholder{
 color:${theme.color.placeholderColor};
 text-transform:capitalize;
 }
 
 &:focus-visible{
 outline:1px solid ${theme.color.borderColor};

 }
`;
