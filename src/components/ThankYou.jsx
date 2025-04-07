import React from 'react'
import styled from 'styled-components'

const ThankYou = () => {
  return (
    <Wrapper>
      <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>🎉 Thank You for Your Order!</h1>
      <p>We’ll send you a confirmation email shortly.</p>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1{
    text-align: center;
  }
  @media(max-width: 992px){
    h1{
        font-size: 30px;
    }
  }
`;
export default ThankYou