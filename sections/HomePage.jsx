import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';

function HomePage() {
  return (
    <HomeSection>
      <LeftSide>
        <Title>Hi, I&apos;m <p id="title-red" style={{color: '#D40008'}}>Krystian</p></Title>
        <SubTitle>Frontend Developer</SubTitle>
        <CVButton>
          <Link href='/about'>
            <p>About me</p>
          </Link>
        </CVButton>
      </LeftSide>
      
      <RightSide>
        <Image
          src="/images/programming-image.svg"
          width={628}
          height={628}
          alt="Programming Image"
          priority
        ></Image>
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
    @media screen and (max-width: 360px){
      flex-direction: column;
    }
`;

const LeftSide = styled.div`
  margin: 14.43rem 0 0 5.62rem;
    @media screen and (max-width: 360px){
      margin: 2.813rem 6.88rem 3.813rem 2.56rem;
    } 
`;

const RightSide = styled.div`
  align-self: center;
    @media screen and (max-width: 360px){
      padding: 0 31px;
    }
`;

const Title = styled.h1`
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
    @media screen and (max-width: 360px){
      flex-direction: column;
      padding-left: 0;
    }
`;

const SubTitle = styled.p`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.8125rem;
  margin: 0;
  color: #EE5359;
    @media screen and (max-width: 360px){
      font-size: 1.25rem;
    }
`;

const CVButton = styled.div`
  width: 165px;
  height: 43.92px;
  color: #FFFFFF;
  background: #9D0208;
  border-radius: 37px;
  margin-top: 3.375rem;
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