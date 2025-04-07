import React from "react";
import styled,{ keyframes } from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";


// const shake = keyframes`
//   0% { transform: translateX(0); }
//   25% { transform: translateX(-5px); }
//   50% { transform: translateX(5px); }
//   75% { transform: translateX(0); }
//   100% { transform: translateX(0); }
// `;

const zoomIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;
const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* <h2>Services</h2> */}
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery.</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-Contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-Back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
                <RiSecurePaymentFill className="icon"/>
                <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 2rem ;

  .grid {
    gap: 4rem;
  }

  .services-1,
  .services-2,
  .services-3{
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({theme}) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
.services-2{
    gap : 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2{
        background : ${({theme})=> theme.colors.bg};
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

        div{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items:center;
            gap: 1rem;
        }
    }
}
h3{
    margin-top: 1.4rem;
    font-size: 1.5rem;
}    
.icon{
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    animation: ${zoomIn} 4s ease-out infinite;
    //  border: 1px solid #5138ee;
}
    
 /* Tablet: Two columns */
  // @media (max-width: 992px) {
  //   .grid-three-column {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // }

  /* Mobile: Single column */
  @media (max-width: 600px) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Services;
