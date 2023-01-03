import styled from "styled-components";
import TechnologyGrid from "../components/TechnologyGrid";

export default function TechnologyPage() {
  return (
    <TechnologySection>
      <Title>Languages and Tools</Title>
      <TechnologyGrid />
    </TechnologySection>
  )
}

const TechnologySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5.0625rem 0 0 5.25rem;
    @media screen and (max-width: 800px){
      align-items: center;
      padding: 3rem 0 0 0;
    }
`;

const Title = styled.h1`
  font-family: 'Merriweather Sans';
  font-weight: 700;
  font-size: 3rem;
  display: grid;
  &::after{
    content: '';
    width: 12rem;
    margin-top: .4375rem;
    border: .125rem solid rgba(0, 0, 0, 0.25);
  }
    @media screen and (max-width: 800px){
      font-size: 37px;
      align-self: flex-start;
    }
`;