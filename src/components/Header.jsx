import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" className='logo'>
            <img src="./images/image.png" alt="my logo image" />
          
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo img{
    height: 6rem;
    }

     @media (max-width: 768px) {
    padding: 0 2rem;

    .logo img {
      height: 4.5rem;
    }
  }

  @media (max-width: 480px) {
    .logo img {
      height: 4rem;
    }
  }
    `;

export default Header