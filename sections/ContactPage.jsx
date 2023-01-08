import { BsGithub, BsLinkedin } from "react-icons/bs";
import styled from "styled-components"
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <ContactSection>
      <Title>Contact with me</Title>
      <Links>
        <div className="link">
          <BsGithub />
          <a
            href="https://github.com/Ombre56"
            target="_blank"
            rel='noreferrer'
          >https://github.com/Ombre56</a>
        </div>
        <br />
        <div className="link">
          <BsLinkedin />
          <a
            href="https://www.linkedin.com/in/krystian-heluszka-2b056a180/"
            target="_blank"
            rel='noreferrer'
          >https://www.linkedin.com/in/krystian-heluszka-2b056a180/</a>
        </div>
      </Links>
      <ContactForm />
    </ContactSection>
  )
}

const ContactSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.75rem 0 0 5.25rem;
    @media screen and (max-width: 800px){
      justify-content: center;
      align-items: center;
      padding: 0;
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

const Links = styled.div`
  display: grid;
  gap: 10px;
  svg{
    color: #9D0208;
  }
  a{
    color: #F85D63;
  }
  a:hover{
    color: #9D0208;
  }
  .link{
    display: flex;
    gap: 10px;
  }
`;
