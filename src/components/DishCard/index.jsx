import React from "react";
import "./styles.css";

const DishCard = ({item}) => {
  return (
    <article className="card-root" >
      <div className="card-head">
        <picture>
          <img src={item.image} alt="Greek Salad" />
        </picture>
      </div>
      <div className="card-body">
        <div className="title-wrapper">
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
        <div className="desc-wrapper">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="card-footer">
        <span>Order a delievry</span>
        <picture>
            <img src="" alt="" />
        </picture>
      </div>
    </article>
  );
};

export default DishCard;
