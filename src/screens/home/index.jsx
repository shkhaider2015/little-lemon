import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import { LOREM_TEXT } from "../../constants";
import { HERO_IMAGE } from "../../assets";
import DishCard from "../../components/DishCard";
import { DISH_DATA } from "../../assets/data";
import Testimonal from "../../components/Testimonals";
import About from "../../components/About";

const Home = () => {
  return (
    <main className="home-wrapper">
      <Navbar />
      <section className="hero">
        <div className="texts">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>{LOREM_TEXT}</p>

          <a href="#" className="btn">
            Reserve a Table
          </a>
        </div>
        <div className="image-wrapper">
          <picture>
            <img src={HERO_IMAGE} alt="Restaurant Foods in chief hand" />
          </picture>
        </div>
      </section>
      <section className="specials">
        <h1>This Week Specials</h1>
        <div className="dish-row">
          <div className="abs-sec left-shadow" />
          <div className="dish-list">
            {DISH_DATA.slice(0, 5).map((item) => (
              <DishCard item={item} />
            ))}
          </div>
          <div className="abs-sec right-shadow" />
        </div>
      </section>
      <Testimonal />
      <About />
    </main>
  );
};

export default Home;
