import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Button } from "../styles/Button";
// import { bounce } from 'react-animations';

const bounceAnimation = keyframes`
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
`;
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;
const Hero = ({ myData }) => {
  const { name } = myData;


  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            
            <p className="intro-data">welcome to</p>
            <h1>{name}</h1>
            <p>
              Store is the perfect destination for anyone looking for handmade,
              vintage, or custom products. With a community-driven ethos and
              over 500 million.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-img">
            <figure>
              <img src="/images/store.jpg" alt="image" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 10rem;
    height: 32rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      animation: ${fadeInUp} 1.5s ease-out;
      font-family: "Acme", sans-serif;
    }
    .intro-data {
      margin-bottom: 0;
       animation: ${fadeInUp} 1.5s ease-out infinite;
    }
  }
  .hero-section-img {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${bounceAnimation} 2s infinite;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 70%;
      height: 90%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 40%;
      top: -4rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
        .hero-section-data {
    p {
      margin: 2rem 0;
      text-align: center;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      text-align: center;
    }
   
  }

    figure :: after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
    }
  }
`;
export default Hero;
