import Image from "next/image"
import { TiArrowRightThick } from "react-icons/ti"
import { MdOutlineLink } from "react-icons/md"
import styled from "styled-components"
import { projects } from "../data/projects"

export default function ProjectsGrid() {
  return (
    <Container>
      {projects.map(({id, title, url, image, technology}) => {
        return (
          <Grid key={id}>
            <h2><TiArrowRightThick className="arrow"/> {title}</h2>
            <Url>
              <MdOutlineLink className="link" />
              <a
                href={url}
                target="_blank"
                rel='noreferrer'
              >{url}</a>
            </Url>
            <div className="image-container">
              <Image
                src={image}
                alt="First project"
                width={481}
                height={239}
                layout='responsive'
              />
            </div>
            <Technology>
              <p>Technology used:</p> <TiArrowRightThick className="arrow"/> {technology}
            </Technology>
          </Grid>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1.25rem;
  .arrow{
    color: #5D5D5D;
  }
  .link{
    color: #9D0208;
  }
    @media screen and (max-width: 800px){
      grid-template-columns: repeat(1, 1fr);
    }
`;

const Grid = styled.div`
  width: 40.625rem;
  .image-container{
    border: 1px solid #9D0208;
    padding: 10px;
    margin-bottom: 20px;
  }
    @media screen and (max-width: 800px){
      width: 20.625rem;
    }
`;

const Url = styled.p`
  color: #FF7E84;
  a{
    padding-left: .9375rem;
  }
`;

const Technology = styled.div`
  font-weight: bold;
  /* padding-left: 1.25rem; */
  p{
    font-size: 1.25rem;
  }
`;