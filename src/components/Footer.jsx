import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
  <Wrapper>
    <section className="contact-short">
      <div className="grid grid-two-column">
        <div>
          <h4>Ready To Get Started?</h4>
          <h4>Talk To Us Today</h4>
        </div>
        <div>
          <Button>
            <NavLink to="/contact">
              Get Started
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
    <footer>
      <div className="container grid grid-four-column">
        <div className="footer-about">
          <h3>Online Store</h3>
          <p>We are everywhere for you.</p>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to get an important updates.</h3>
          <form action="#">
            <input type="email" placeholder='your email' />
            <input type="submit" value="subscribe" />
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social--icons">
            <div>
              <FaDiscord className='icons'/>
            </div>
            
            <div>
              <FaFacebook className='icons'/>
            </div>
            <div>
              < FaYoutube className='icons'/>
            </div>
          </div>
        </div>
        <div className='footer-contact'>
          <h3>Call Us</h3>
          {/* <a href="tel:5554444567">+91 1234567890</a> */}
          <h3>+91 3456567898</h3>
        </div>
      </div>

      <div className="footer-bottom--section">
        <hr/>
        <div className="container grid grid-two-column">
          <p>@{new Date().getFullYear()} Online Strore. All Rights Reserved.</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  </Wrapper>
  )
}
const Wrapper = styled.section`
iSIFGq{
  margin:0;
}
.contact-short{
  max-width:50vw;
  margin: auto;
  padding: 2rem 5rem;
  background-color: ${({theme})=> theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({theme})=> theme.colors.shadowSupport};
  transform: translateY(50%);

  .grid div:last-child{
    justify-self: end;
    align-self: center;
  }
} 
  
footer{
  padding: 14rem 0 9rem 0;
  background-color: ${({theme})=> theme.colors.footer_bg};
  h3{
    color: ${({theme})=> theme.colors.hr};
    margin-bottom: 2rem;
  }
  p{
     color: ${({theme})=> theme.colors.white};
  }  
  .footer-social--icons{
    display: flex;
    gap: 2rem;

    div{
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({theme})=> theme.colors.white};

      .icons{
        color: ${({theme})=> theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }   
}

.footer-bottom--section{
  padding-top:9rem;

  hr{
    margin-bottom: 2rem;
    color: ${({theme})=> theme.colors.hr};
    height: 0.1px;
  }
}

@media (max-width: ${({theme})=> theme.media.mobile}){
  .contact-short{
  max-width:80vw;
  margin: 4.8rem auto;
  text-align:center;
  transform: translateY(0%);

  .grid div:last-child{
    justify-self: center;
   
  }
} 
 footer{
 padding: 9rem 0 9rem 0;
 } 
 .footer-bottom--section{
  padding-top:4.8rem;

 
}
}
`;
export default Footer