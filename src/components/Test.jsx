import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Wrapper>
      <div class="container">
        <div class="upper">Hello everyone</div>
        <div class="lower">Hello everyone</div>
        <div class="inside">Hope You Have A Nice Day</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    *,
:before,
:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
}

.container {
  width: 9.25em;
  height: 1.15em;
  font-size: 4rem;
  font-family: sans-serif;
  position: relative;
}

.container div {
  position: absolute;
  left: 0;
  text-transform: uppercase;
  width: 100%;
  display: block;
  text-align: center;
}

.upper {
  top: 0;
  height: 52.5%;
  color: #fff;
  overflow: hidden;
  z-index: 3;
  animation: moveUp 1.5s ease-in-out  repeat;
  background-color: #121212;
}

.lower {
  bottom: 0;
  height: 100%;
  background: linear-gradient(180deg, #121212 52.5%, #fff 52.5%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  z-index: 1;
  animation: moveDown 1.5s ease-in-out repeat;
}

.inside {
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  text-align: center;
  z-index: 2;
  font-size: 1rem;
  color: #dc143c;
}

@keyframes moveUp {
  0%,
  100% {
    top: 0;
  }

  50%,
  70% {
    top: -45px;
  }
}

@keyframes moveDown {
  0%,
  100% {
    top: 0;
  }

  50%,
  70% {
    top: 30px;
  }
}

@media (max-width: 424px) {
  .container {
    font-size: 2.5rem;
  }

  .inside {
    font-size: 0.75rem;
  }
}

@media (max-width: 320px) {
  .container {
    font-size: 2rem;
  }

  .inside {
    font-size: 0.5rem;
  }
}



`;
export default Text;
