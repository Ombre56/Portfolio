import styled from "styled-components";
import ProjectsGrid from "../components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectsGrid />
    </ProjectsSection>
  )
}

const ProjectsSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.75rem 0 0 5.25rem;
    @media screen and (max-width: 800px){
      align-items: center;
      padding: 2rem 0 0 0;
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
      font-size: 3rem;
      align-self: flex-start;
    }
`;