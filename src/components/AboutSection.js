import React from "react";
import homeIntro from "../img/home_Intro.jpg";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world.</h2>
          </div>
        </div>
        <p>
          An educated mind can teach many. An educated mind is better than empty
          one.
        </p>
        <button>About us</button>
      </div>
      <div className="image">
        <img src={homeIntro} alt="man reading book " />
      </div>
    </div>
  );
}

export default AboutSection;
