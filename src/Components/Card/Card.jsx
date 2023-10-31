import React from "react";
import "./card.css";

const Card = ({ img, title, desc }) => {
  return (
    <div className="cardContainer">
      <div className="imgArea">
        <img className="cardImage" src={img} alt={title} />
      </div>
      <div className="textArea">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className="btn">See image</button>
      </div>
    </div>
  );
};

export default Card;
