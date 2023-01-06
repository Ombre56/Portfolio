import { MdSend } from "react-icons/md";
import styled from "styled-components"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    validate();
    emailjs.sendForm('service_gsfd15y', 'template_yajb9ph', form.current, 'F28Fm7PYhhQjiv8W7')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent!')
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset();
  };

  return (
    <>
      <Title>Contact Form</Title>
      <ContainerForm method='post' ref={form} onSubmit={sendEmail}>
        <Inputs>
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              required
              maxLength={20}
              placeholder="Full Name"
              title="This field is mandatory!"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required
              id="email"
              maxLength={20}
              placeholder="email"
            />
          </div>
        </Inputs>

        <div className="textarea-container">
          <textarea
            name="message"
            cols="50"
            rows="15"
            required
            placeholder="Message"
          />
        </div>
        
        <Button><p>SEND</p> <MdSend/></Button>
      </ContainerForm>
    </>
  )
}

const Title = styled.h1`
  font-family: 'Merriweather Sans';
  font-weight: 700;
  font-size: 2.25rem;
  display: grid;
  margin-top: 5.9375rem;
    @media screen and (max-width: 800px){
      font-size: 3rem;
      align-self: flex-start;
    }
`;

const ContainerForm = styled.form`
  display: grid;
  gap: 2.6875rem;
  input{
    width: 18rem;
    height: 4.625rem;
    background: rgba(157, 2, 8, 0.44);
    border: 1px solid #9D0208;
    border-radius: 15px;
    color: #FFFFFF;
    padding-left: 20px;
      &::placeholder{
        font-family: 'Merriweather Sans';
        font-weight: 700;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.22);
      }
  }
  textarea{
    resize: none;
    background: rgba(157, 2, 8, 0.44);
    border: 1px solid #9D0208;
    border-radius: 15px;
    color: #FFFFFF;
    padding: 24px 0 0 20px;
      &::placeholder{
        font-family: 'Merriweather Sans';
        font-weight: 700;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.22);
      }
  }
  span{
    color: #FF7E84;
    font-family: 'Merriweather Sans';
  }
  .textarea-container{
    display: grid;
    gap: .625rem;
  }
    @media screen and (max-width: 800px){
      input{
        width: 9.25rem;
        height: 2.375rem;
      }
      input::placeholder, textarea::placeholder{
        font-size: .9375rem;
      }
      textarea{
        width: 303px;
        height: 195px;
      }
    }
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.8125rem;
  .input-container{
    display: grid;
    gap: .625rem;
  }
    @media screen and (max-width: 800px){
      gap: .625rem;
    }
`;

const Button = styled.button`
  width: 9.25rem;
  height: 2.75rem;
  color: #FFFFFF;
  background: #9D0208;
  border-radius: 37px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 41px #9D0208);
  transition: all 0.3s ease-in-out;
  p{
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
  &:hover{
    background: #FFF;
    border: 2px solid #9D0208;
    p,svg{
      color: #9D0208;
    }
  }
`;
