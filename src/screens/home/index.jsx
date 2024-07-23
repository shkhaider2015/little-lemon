import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import { LOREM_TEXT } from "../../constants";
import { HERO_IMAGE } from "../../assets";

const Home = () => {
  return (
    <main className="home-wrapper">
      <Navbar />
      <section className="hero">
        <div className="texts">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>{LOREM_TEXT}</p>
          <a href="#" className="btn">Reserve a Table</a>
        </div>
        <div className="image-wrapper">
        <picture>
            <img src={HERO_IMAGE} alt="Restaurant Foods in chief hand" />
        </picture>

        </div>
      </section>
    </main>
  );
};

export default Home;
