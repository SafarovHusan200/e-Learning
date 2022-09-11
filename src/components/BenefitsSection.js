import React from "react";
// import images
import { About, Description, Image } from "../styles";
import homeIntro2 from "../img/home_Intro2.jpg";
import styled from "styled-components";

function BenefitsSection() {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>online Platform</h3>
          <h3>Higth experienced and talanted mentors</h3>
          <h3>Fast learning </h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="a girl in lobaratory" />
      </Image>
    </Benefits>
  );
}

// styles
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 4rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSection;
