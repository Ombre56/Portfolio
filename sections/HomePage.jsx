import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'

function HomePage() {
  return (
    <HomeSection>
      <LeftSide>
        <Title>Hi, I&apos;m <p id="title-red" style={{color: '#D40008'}}>Krystian</p></Title>
        <SubTitle>Frontend Developer</SubTitle>
        <CVButton><p>Download CV</p></CVButton>
      </LeftSide>
      
      <RightSide>
        <Image src="/images/blob.svg" width={534} height={460} alt="Blob"></Image>
      </RightSide>
    </HomeSection>
  )
}

export default HomePage;

const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  color: #FFFFFF;
  background: #001730;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftSide = styled.div`
  margin: 14.43rem 0 0 5.62rem;
`;

const RightSide = styled.div`
  margin-top: 16.75rem;
`;

const Title = styled.h1`
  font-family: 'Merriweather Sans';
  font-weight: 700;
  font-size: 4rem;
  line-height: 5rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  p#title-red{
    margin: 0;
    padding-left: 1.25rem;
  }
`;

const SubTitle = styled.p`
  font-family: 'Merriweather Sans';
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.8125rem;
  margin: 0;
  color: #EE5359;
`;

const CVButton = styled.div`
  width: 165px;
  height: 43.92px;
  color: #FFFFFF;
  background: #9D0208;
  border-radius: 37px;
  margin-top: 3.375rem;
  text-align: center;
  p{
    font-family: 'Merriweather Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding-top: .75rem;
  }
`;