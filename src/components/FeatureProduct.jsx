import styled from "styled-components";
import { useProductContext } from "../context/productcontext";
import Product from '../components/Product'

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);
  if (isLoading) {
    return <div>......Loading</div>;
  }

  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <div className="intro-data">Check Now!</div>
          <div className="common-heading">Our Feature Services</div>
          <div className="grid grid-three-column">
            {
                featureProducts.map((curEle)=>{
                    return <Product key={curEle.id}{...curEle}/>;
                })
            }

          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 100rem;
  }
    .common-heading{
        font-size: 3rem;
        font-family: "Acme", sans-serif; 
        
    }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::afrer {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover:: {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0.4rem;
    }
    .card-data-flex {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h4{
      color: ${({ theme }) => theme.colors.text};
      text-transform: uppercase;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0/ 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default FeatureProduct;
