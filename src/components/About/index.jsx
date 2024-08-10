import React from "react";
import "./styles.css";
import { LOREM_TEXT_X2, sectionIds } from "../../constants";
import { MarioAndAdrian2, MarionAnfAdrian } from "../../assets";

const About = () => {
  return (
    <section id={sectionIds.ABOUT} className="about-wrapper">
      <div className="text-col">
        <h1>Little Lemon</h1>
        <h5>Chicago</h5>
        <p>{LOREM_TEXT_X2}</p>
      </div>
      <div className="image-col">
        <picture>
          <img className="first-image" src={MarionAnfAdrian} alt="Mario and Adrian" />
        </picture>
        <picture>
          <img className="second-image" src={MarioAndAdrian2} alt="Mario and Adrian second" />

        </picture>
      </div>
    </section>
  );
};

export default About;
