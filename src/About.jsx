// import React from "react";

// import styled, { keyframes } from "styled-components";

// const bounceAnimation = keyframes`
// 0%, 100% { transform: translateY(0); }
// 50% { transform: translateY(-10px); }
// `;

// const About = () => {
//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-img">
//             <figure>
//               <img
//                 src="/images/delivery.webp"
//                 alt="image"
//                 className="img-style"
//               />
//             </figure>
//           </div>
//           <div className="hero-section-data">
//             <h1>About Us</h1>
//             <p>
//               Welcome to Our Online Store, your one-stop destination for the
//               latest and greatest in tech.
//             </p>
//             <p>
//               Store is the perfect destination for anyone looking for handmade,
//               vintage, or custom products. With a community-driven ethos and
//               over 500 million.
//             </p>
//             <p>
//               Whether you're a tech enthusiast, a gamer, a student, or a
//               professional, we've got something tailored just for you. Our
//               handpicked selection features trusted brands, latest launches, and
//               must-have accessories — all backed by reliable support and secure
//               shopping.
//             </p>
//           </div>
//         </div>

//         <div className="extra-info">
//           <section>
//             <h2>🎯 Our Mission</h2>
//             <p>
//               To make premium technology accessible and affordable for everyone. We aim to deliver
//               quality, innovation, and customer satisfaction with every product.
//             </p>
//           </section>

//           <section>
//             <h2>💡 Why Choose Us?</h2>
//             <ul>
//               <li>✔ Latest gadgets and tech</li>
//               <li>✔ 100% genuine products</li>
//               <li>✔ Fast delivery across the country</li>
//               <li>✔ Easy returns & reliable support</li>
//             </ul>
//           </section>

//           <section>
//             <h2>📦 What We Offer</h2>
//             <p>
//               • <strong>Mobile Phones:</strong> Android & iPhones from brands like Samsung, Apple, OnePlus, and more. <br />
//               • <strong>Laptops:</strong> Powerful devices for work, gaming, and study. <br />
//               • <strong>Smartwatches:</strong> Stay connected, track fitness, and elevate your lifestyle.
//             </p>
//           </section>

//           <section>
//             <h2>❤️ Our Customers Matter</h2>
//             <p>
//               Your satisfaction is our success. Our support team is here 24/7 to help you
//               with anything you need — before and after purchase.
//             </p>
//           </section>

//           <section className="quick-facts">
//             <h2>📊 Quick Facts</h2>
//             <ul>
//               <li><strong>5+</strong> Years in Business</li>
//               <li><strong>10,000+</strong> Happy Customers</li>
//               <li><strong>1,500+</strong> Products Sold</li>
//               <li><strong>99%</strong> Positive Reviews</li>
//             </ul>
//           </section>

//           <div className="cta">
//             <h3>Start your tech journey with us!</h3>
//             <a href="/products" className="btn">Explore Products</a>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 10rem 0;

//   img {
//     min-width: 10rem;
//     height: 32rem;
//   }
//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }
//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;

//       font-family: "Acme", sans-serif;
//     }
//     .intro-data {
//       margin-bottom: 0;
//     }
//   }
//   .hero-section-img {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     animation: ${bounceAnimation} 2s infinite;
//   }
//   // figure {
//   //   position: relative;

//   //   &::after {
//   //     content: "";
//   //     width: 70%;
//   //     height: 90%;
//   //     background-color: rgba(81, 56, 238, 0.4);
//   //     position: absolute;
//   //     left: 40%;
//   //     top: -4rem;
//   //     z-index: -1;
//   //   }
//   // }
//   .img-style {
//     width: 100%;
//     height: 450px;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//     }
//     .hero-section-data {
//       p {
//         margin: 2rem 0;
//         text-align: center;
//       }
//       h1 {
//         text-transform: capitalize;
//         font-weight: bold;
//         text-align: center;
//       }
//     }

//     figure :: after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//     }
//   }
// `;

// export default About;

import React from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const About = () => 
 
    <Wrapper>
      <div className="container">
        <div>
          <h1>About Us</h1>
        </div>
        <div className="grid grid-two-column">
          <div className="hero-section-img">
            <figure>
              <img
                src="/images/delivery.webp"
                alt="Delivery"
                className="img-style"
              />
            </figure>
          </div>
          <div className="hero-section-data">
            {/* <h1>About Us</h1> */}
            <p>
              Welcome to <strong>Our Online Store</strong> — your go-to
              destination for top-notch electronics and tech essentials.
            </p>
            <p>
              We bring you the latest mobile phones, powerful laptops, and
              stylish smartwatches, all from trusted brands and at unbeatable
              prices.
            </p>
            <p>
              Whether you’re a student, gamer, business professional, or tech
              lover, we’ve got something just for you.
            </p>
            <p>
              Enjoy quick delivery on all orders, free of charge — because you
              deserve speedy service without extra fees.
            </p>
            <p>
            📦 Safety comes first! All our deliveries are contactless to keep you and our team safe.
            </p>
          </div>
        </div>

        {/* More Info Section */}
        <div className="extra-info">
          <section>
            <h1>🎯 Our Mission</h1>
            <p>
              To make premium technology accessible and affordable for everyone.
              We aim to deliver quality, innovation, and customer satisfaction
              with every product.
            </p>
          </section>

          <section>
            <h1>💡 Why Choose Us?</h1>
            <ul>
              <li>✔ Latest gadgets and tech</li>
              <li>✔ 100% genuine products</li>
              <li>✔ Fast delivery across the country</li>
              <li>✔ Easy returns & reliable support</li>
            </ul>
          </section>

          <section>
            <h1>📦 What We Offer</h1>
            <p>
              • <strong>Mobile Phones:</strong> Android & iPhones from brands
              like Samsung, Apple, OnePlus, and more. <br />•{" "}
              <strong>Laptops:</strong> Powerful devices for work, gaming, and
              study. <br />• <strong>Smartwatches:</strong> Stay connected,
              track fitness, and elevate your lifestyle.
            </p>
          </section>

          <section>
            <h1>❤️ Our Customers Matter</h1>
            <p>
              Your satisfaction is our success. Our support team is here 24/7 to
              help you with anything you need — before and after purchase.
            </p>
          </section>

          <section className="quick-facts">
            <h1>📊 Quick Facts</h1>
            <ul>
              <li>
                <strong>5+</strong> Years in Business
              </li>
              <li>
                <strong>10,000+</strong> Happy Customers
              </li>
              <li>
                <strong>1,500+</strong> Products Sold
              </li>
              <li>
                <strong>99%</strong> Positive Reviews
              </li>
            </ul>
          </section>

          <div className="cta">
            <h3>Start your tech journey with us!</h3>
            <a href="/products" className="btn">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
 


const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 10rem;
    height: 32rem;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-family: "Acme", sans-serif;
    font-size: 4.2rem;
    text-align: center;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      line-height: 1.6;
      font-size: 1.6rem;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-family: "Acme", sans-serif;
      font-size: 3.2rem;
    }
  }

  .hero-section-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${bounceAnimation} 2s infinite;
  }

  .img-style {
    width: 100%;
    height: 450px;
    object-fit: contain;
  }

  .extra-info {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    section {
      h1 {
        text-transform: capitalize;
        font-weight: bold;
        font-family: "Acme", sans-serif;
        font-size: 3.2rem;
        text-align: center;
      }
      h1,
      ul,
      p {
        margin-top: 20px;
        text-align: center;
      }
      p,
      ul {
        font-size: 1.6rem;
        line-height: 1.8;
      }

      ul {
        padding-left: 2rem;
        list-style: none;
      }

      li::before {
        content: "• ";
        color: #3f51b5;
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }

    .quick-facts ul {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      text-align: center;
    }

    .quick-facts li {
      background-color: #f2f2f2;
      padding: 1.2rem 2rem;
      border-radius: 1rem;
      font-size: 1.6rem;
    }

    .cta {
      text-align: center;
      margin-top: 3rem;

      h3 {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
      }

      .btn {
        background-color: #3f51b5;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 10px;

        &:hover {
          transform: scale(0.96);
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      margin-top: 20px;
      gap: 6rem;
    }
    .img-style {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
    .hero-section-data,
    .extra-info {
      text-align: center;
    }
  }
`;

export default About;
