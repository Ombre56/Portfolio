import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'

export default function AboutPage() {
  return (
    <AboutSection>
      <LeftSide>
        <Title>About me</Title>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </LeftSide>
      <RightSide>
        <Image
          src="/images/AboutPage-image.jpg"
          width={419}
          height={503}
          alt="Programming Image Laptop"
          priority
        />
      </RightSide>
    </AboutSection>
  )
}

const AboutSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
    @media screen and (max-width: 996px){
      flex-direction: column;
      justify-content: center;
    }
`;

const LeftSide = styled.div`
  max-width: 500px;
  align-self: flex-start;
  padding-top: 14.43rem;
  p{
    width: 534px;
    font-family: 'Merriweather Sans';
    font-size: 24px;
    text-align: justify;
  }
    @media screen and (max-width: 996px){
      padding: 3rem 0 2rem 0;
      align-self: center;
      max-width: 360px;
      p{
        max-width: 360px;
      }
    } 
`;

const RightSide = styled.div`
  width: 28.5625rem;
  height: 33.5625rem;
  border: 2px solid #9D0208;
  padding: 19px;
    @media screen and (max-width: 996px){
      align-self: center;
      width: 16.875rem;
      height: 18.75rem;
    } 
`;

const Title = styled.h1`
  font-family: 'Merriweather Sans';
  font-weight: 700;
  font-size: 48px;
  display: grid;
  &::after{
    content: '';
    width: 12rem;
    border: .125rem solid rgba(0, 0, 0, 0.25);
  }
    @media screen and (max-width: 996px){
      font-size: 40px;
    } 
`;