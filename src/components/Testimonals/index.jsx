import React from "react";
import "./styles.css";
import TestimonalCard from "../TestimonalCard";
import { TESTIMONAL_DATA } from "../../assets/data";

const Testimonal = () => {
  return (
    <section className="testimonal">
      <h1>Testimonals</h1>
      <div className="testimonal-row">
        <div className="abs-sec left-shadow" />
        <div className="testimonal-cards-wrapper">
          {
            TESTIMONAL_DATA.map(({id, ...testimonal}) => <TestimonalCard key={id} {...testimonal} />)
          }
        </div>
        <div className="abs-sec right-shadow" />
      </div>
    </section>
  );
};

export default Testimonal;
