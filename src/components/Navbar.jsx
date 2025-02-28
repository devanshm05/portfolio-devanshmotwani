import React from 'react';
import styled, { useTheme } from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {Bio} from "../data/constants";
import {MenuRounded} from "@mui/icons-material";
import { useState} from 'react';

const MobileMenu = styled.ul`
    
width:100%;
  display:flex;
  flex-direction:column;
  align-items:start;
  gap:16px;
  list-style:none;
  width:100%;
  padding:12px 40px 24px 40px;
  background:${({theme})=>theme.card_light + 99};
  position : absolute;
  top:80px;
  right:0;

`;

const MobileIcon = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    width:200px;
    color: ${({theme})=>theme.text_primary};
    display:none;
    position:absolute;
    right:-150px;
    top:36%;
    @media screen and (max-width :768px){
            display:block;
    }
`;

const Nav = styled.div`
   background-color : ${({theme})=>theme.bg};
   height : 80px;
   display : flex;
   align-items : center;
   justify-content : center;
   font-size:1rem;
   position : sticky;
   top:0;
   z-index:10;
   color:white; 
`;

const NavbarContainer = styled.div`
   width:100%;
   max-width : 1200px;
   padding:0 24px;
   display : flex;
   align-items : center;
   justify-content : space-between;
   font-size:1rem;
   
 
`;
const NavLogo = styled(LinkR)`
    width:80%;
    padding:0 27px;
    text-decoration:none;
    color:inherit;
    font-weight:500;
    font-size:18px;
    @media screen and (max-width: 768px) {
        position: absolute;
        left: 40%; /* Move slightly left only on small screens */
        transform: translateX(-50%);
    }
`;

const NavItems = styled.ul`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:32px;
  padding:0 6px;
  list-style:none;
  @media screen  and (max-width:768px){
              display:none;      //for smalller screen i don't want github profile button
    }


`;

const NavLink = styled.a`
   color :${({theme})=>theme.text_primary};
   font-weight:500;
   cursor:pointer;
   transition : all 0.2s ease-in-out;
   text-decoration:none;
   &:hover{
   color:${({theme})=>theme.primary};
   }
`

const ButtonContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:end;
    align-items:center;
    padding:0 6px;
    @media screen  and (max-width:768px){
              display:none;      //for smalller screen i don't want github profile button
    }


`;

const GithubButton = styled.a`
     border:1px solid ${({theme})=> theme.primary};
     color:${({theme})=>theme.primary};
     justify-content:center;
     display:flex;
     align-items:center;
     border-radius:20px;
     cursor: pointer;
     padding:10px 20px;
     font-size:16px;
     font-weight:500;
     transition:all 0.6s ease-in-out;
     text-decoration:none;
     &: hover{
       background:${({theme})=>theme.primary};
       color:${({theme})=>theme.text_primary};


     }
`;

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const theme=useTheme();
  return (
    <Nav>

  
    <NavbarContainer>
        <NavLogo to="/">Dashboard</NavLogo>

        <MobileIcon onClick={()=> setIsOpen(!isOpen)}>
          <MenuRounded style={{color:'inherit'}}/>
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
         {/* <NavLink href="#Experience">Experience</NavLink> */}
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>
        
        {
          isOpen && (
            <MobileMenu>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href="#About">About</NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
        {/*  <NavLink onClick={()=> setIsOpen(!isOpen)} href="#Experience">Experience</NavLink> */}
          <NavLink onClick={()=> setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href="#Education">Education</NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href="#Contact">Contact</NavLink>
          <GithubButton href={Bio.github} style={{
            background:theme.primary,
            color:theme.text_primary,
          }}>Github Profile</GithubButton>
            </MobileMenu>

          )
        }

        <ButtonContainer>
          <GithubButton href={Bio.github}>Github Profile</GithubButton>
        </ButtonContainer>

    </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
