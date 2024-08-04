import React from "react";
import "./styles.css";
import { Rating } from "react-simple-star-rating";

const TestimonalCard = (props) => {
  const { name, image, rating, reveive } = props;
  return (
    <div className="testimonal-card">
      <img src={image} alt="user image" />
      <h3>{name}</h3>
      <Rating
        size={20}
        disableFillHover={true}
        initialValue={rating}
        className="testimonal-rating"
      />
      <blockquote>
        <p className="descrioption">{reveive.slice(0, 150)}</p>
      </blockquote>
    </div>
  );
};

export default TestimonalCard;
