import Head from 'next/head';
import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio Krystian Heluszka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation open={open} handleOpen={handleOpen} />
        <div>
          <NavButton>
            <GiHamburgerMenu onClick={handleOpen} />
          </NavButton>
          {children}
        </div>
      </Container>

    </>
  )
}

export default Layout;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  position: relative;
  grid-template-columns: minmax(15.4375rem, 10%) 1fr;
  @media screen and (max-width: 800px){
    display: block;
  }
`;

const NavButton = styled.button`
  width: 34px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  margin: 1.25rem 0 0 1.25rem;
  cursor: pointer;
  background: none;
  color: #FFFFFF;
  @media screen and (min-width: 800px){
    display: none;
  }
`;