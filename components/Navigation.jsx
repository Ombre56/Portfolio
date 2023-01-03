import React, { useState } from 'react'
import { FaHome, FaReact } from 'react-icons/fa';
import { RiAccountCircleFill, RiContactsFill } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import Link from 'next/link';

export default function Navigation({open, handleOpen}) {
  return (
    <Container open={open}>
      <LogoContainer>
        <CgClose onClick={handleOpen}/>
        <Logo>
          <div className="left-corner" />
          <span>KH</span>
          <div className="right-corner" />
        </Logo>
      </LogoContainer>
      <Nav>
        <li className='clicked' style={{ color: '#9D0208' }}>
          <FaHome />
          <Link href='/'>
            <p style={{ color: '#F85D63' }}>Home</p>
          </Link>
        </li>
        <li>
          <RiAccountCircleFill />
          <Link href='/about'>
            <p>About</p>
          </Link>
        </li>
        <li>
          <FaReact />
          <Link href='/technology'>
            <p>Technology</p>
          </Link>
        </li>
        <li>
          <GrProjects />
          <Link href='/projects'>
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <RiContactsFill />
          <Link href='/contact'>
            <p>Contact</p>
          </Link>
        </li>
      </Nav>
      <Button>
        <a href="https://drive.google.com/file/d/1WCvsyaF0WwUoWCXjlIOBjCjSav1As1bP/view?usp=sharing" download target="_blank" rel='noreferrer'>
            <p>Download CV</p>
        </a>
      </Button>
      <p>© 2022</p>
    </Container>
  )
}

const Container = styled.div`
  width: 15.4375rem;
  min-height: 100vh;
  background-color: #001328;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;
  box-shadow: 0px 4px 17px 1px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s ease-in-out;
  @media screen and (max-width: 800px){
    width: 12.3125rem;
    position: absolute;
    z-index: 10;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  svg{
    align-self: flex-end;
    font-size: 25px;
    margin-right: 1rem;
  }
  @media screen and (min-width: 800px){
    svg{
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 6.0625rem;
  height: 3.5625rem;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .left-corner{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 80px;
    top: 35px;
    border-width: 0px 0px 3px 3px;
    border-style: solid;
    border-color: #9D0208;
  }
  .right-corner{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 80px;
    top: 1px;
    border-width: 3px 3px 0px 0px;
    border-style: solid;
    border-color: #9D0208;
  }
  span{
    font-family: 'Playfair Display';
    font-weight: 700;
    font-size: 2.5rem;
  }
`;

const Nav = styled.ul`
  flex-basis: 80%;
  width: 100%;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  justify-content: center;
  padding-left: 3.75rem;
  p{
    margin: 0;
  }
  li{
    font-family: 'Merriweather Sans';
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: .8125rem;
    cursor: pointer;
  }
  path {
    stroke: rgb(255, 255, 255);
  }
  .clicked{
    margin-left: .5625rem;
  }
  li:hover{
    margin-left: .5625rem;
    color: #9D0208;
    path{
      stroke: #9D0208;;
    }
    svg{
      color: #9D0208;
    }
    p{
      color: #F85D63;
    }
  }
  @media screen and (max-width: 800px){
    flex-grow: 1;
    padding-left: 2.5rem;
  }
`;

const Button = styled.div`
  width: 165px;
  height: 43.92px;
  color: #FFFFFF;
  background: #9D0208;
  border-radius: 37px;
  text-align: center;
  cursor: pointer;
  filter: drop-shadow(0px 0px 41px #9D0208);
  p{
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    padding-top: .75rem;
  }
`;