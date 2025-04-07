import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">CONTACT US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1475.583342803258!2d72.82997811483342!3d21.262060798806488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1742461190986!5m2!1sen!2sin"
        width="100%"
        height="350"
        title="Embedded Google Map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mdkeavaz"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="user name"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              id=""
              placeholder="enter email"
              autoComplete="off"
              required
            />
            <textarea
              name="msg"
              id=""
              placeholder="Enter your message"
              cols="30"
              rows="5"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" name="" id="" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 40rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  h2 {
    font-family: "Acme", sans-serif;
  }
`;

export default Contact;
