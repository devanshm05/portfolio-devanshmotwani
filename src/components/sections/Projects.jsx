import React from 'react'
import styled from 'styled-components';
import ProjectCard from '../cards/ProjectCard';
import {projects} from "../../data/constants";

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   margin-top:50px;
   position:relative;
   padding:0px 16px;
   z-index:1;
   align-items:center;
   background-color: ${({theme})=>theme.bg}; 
`;

const Wrapper = styled.div`
  position:relative;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
width:100%;
max-width:1100px;
gap:12px;

@media(max-width:960px){
    flex-direction:column;
}
`;

const Desc = styled.div`
    font-size:18px;
  text-align:center;
  font-weight:600;
  color:${({theme})=> theme.text_secondary};

  @media(max-width:768px){
   
    font-size:16px;
}
`;
const Title = styled.div`
  font-size:52px;
  text-align:center;
  font-weight:600;
  margin-top:20px;
  color:${({theme})=> theme.text_primary};

  @media(max-width:768px){
    margin-top:12px;
    font-size:32px;
}

`;

const CardContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   gap:28px;
   flex-wrap:wrap;
   z-index:2;
`;

const  Projects= () => {
  return (
    <Container id="Projects">
        <Wrapper>
          <Title>Projects</Title>  
          <Desc style={
              {
                marginBottom:"40px",
                
              }
             }>Building user-friendly, scalable, and high-performance applications.
             </Desc>
            <CardContainer>
            {projects
            .map((project) => (
              <ProjectCard project={project} />
            ))}
            </CardContainer>
        </Wrapper>
      
    </Container>
  )
}

export default  Projects
