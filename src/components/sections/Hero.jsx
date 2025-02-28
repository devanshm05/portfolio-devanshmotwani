import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/photolift.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import {Tilt} from "react-tilt"; 
import {motion} from "framer-motion";
import {headContainerAnimation,headContentAnimation,headTextAnimation} from "../../utils/motion"

const HeroContainer = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  padding: 80px 30px;
  z-index:1;
  @media(max-width:960px){
        padding: 66px 16px; 
        align-items:center;
        text-align:center;  


  }

   @media(max-width:640px){
        padding: 32px 16px; 
        align-items:center;
        text-align:center; 
  }

  clip-path:polygon(0 0,100% 0,100% 100% , 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
max-width:1100px;

@media (max-width:960px){
   flex-direction:column;
}


`;

const HeroLeftContainer = styled.div`
 width:100%;
 order:1;
 gap:6px;


 @media (max-width:960px){
 width:100%;
     order:2;
     margin-bottom:30px;
     diplay:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
 }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  transform: translateX(100px);

  @media (max-width: 960px) {
    order: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    transform: translateX(5px);
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
    transform: translateX(1px);
  }
`;


const Title = styled.div`
font-weight:700px;
font-size:50px;
color:${({theme})=>theme.text_primary};
line-height:68px;

@media(max-width:960px){
          text-align:center;

          font-size:40px;
          line-height:48px;
          margin-bottom:8px;
}
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px; // Default font size for desktop
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px; // Default line height for desktop

  @media (max-width: 960px) {
    font-size: 24px; // Adjusted font size for smaller screens
    line-height: 48px; // Adjusted line height for smaller screens
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 20px; // Adjusted font size for mobile
    line-height: 32px; // Adjusted line height for mobile
    text-align: center; // Center text only in mobile view
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  display: inline-block; // Ensures the Typewriter text behaves as inline-block
`;

const SubTitle = styled.div`
font-size:20px;
margin-bottom:42px;
line-height:32px;
color:${({theme})=>theme.text_primary + 95};

@media(max-width:960px){
          text-align:center;

          font-size:16px;
          line-height:32px;
`;


const ResumeButton = styled.a`
 -webkit-appearance:button;
 -moz-appearance:button;
 appearance:button;
 text-decoration:none;

 width:95%;
 max-width:300px;

 text-align:center;
 padding: 12px 0;

 
background: hsla(271, 100%, 50%, 1); 
background: linear-gradient(
225deg,
hsla(271, 100%, 50%, 1) 0%,
hsla(294, 100%, 50%, 1) 100%
);

background: -moz-linear-gradient(
225deg,
hsla(271, 100%, 50%, 1) 0%,
hsla(294, 100%, 50%, 1) 100%
 );

background: -webkit-linear-gradient(
225deg,
hsla(271, 100%, 50%, †) 0%,
hsla(294, 100%, 50%, 1) 100%
);
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius:50px;
font-weight:700;
font-size:20px;
color: white;

&:hover{
 transform:scale(1.05);
 transition:all 0.4s ease-in-out;
 box-shadow: 20px 20px  60px #1F2634;
}

`;

const Img = styled.img`
  border-radius: 20%; // Ensures the image is circular
  width: 100%; // Adjust width to fit container
  height: auto; // Maintain aspect ratio
  max-width: 500px; // Maximum size for desktop
  max-height: 500px; // Maximum size for desktop
  border: 2px solid ${({ theme }) => theme.primary};
  margin: 0 auto; // Center the image horizontally
  object-fit: cover; // Ensures the image covers the area without distortion

  @media (max-width: 640px) {
    max-width: 280px; // Adjusted size for mobile
    max-height: 280px; // Adjusted size for mobile
  }
`;

const HeroBg = styled.div`
  position:absolute;
  display:flex;
  top:50%;
  right:0;
  bottom:0;
  left:50%;
  width:100%;
  height:100%;
  max-width:1360px;
  justify-content:end;
  -webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%); 

@media (max-width: 960px) {
   justify-content: center;
   padding:0 0px;
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
            <HeroBgAnimation/>
        </HeroBg>
        
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
            <HeroLeftContainer>
            <motion.div {...headTextAnimation}>
               <Title>Hi, I am <br/> {Bio.name}</Title>
               <TextLoop>
                I am a {}
                <Span>
                    <Typewriter
                    options ={{
                        strings:Bio.roles,
                        autoStart:true,
                        loop:true,
                    }}/>
                </Span>
               </TextLoop>
               </motion.div>

               <motion.div {...headContentAnimation}>
               <SubTitle>{Bio.description}</SubTitle>
               </motion.div>
              
               <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton>
            </HeroLeftContainer>

            <HeroRightContainer>
                <headContentAnimation>
                <Tilt>
                <Img src={HeroImg} alt="Devansh Motwani"/>
                </Tilt>
                </headContentAnimation>
                
            </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>

       
      </HeroContainer>
    </div>
  )
}

export default Hero;
