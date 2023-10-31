import React from "react";
import Card from "../Card/Card";
import "./cardsection.css";
import One from "../../assets/one.jpg";

const CardSection = () => {
  const cardData = [
    {
      id: 1,
      img: One,
      title: "Image One",
      desc: "this is our first card in react js",
    },
    {
      id: 2,
      img: One,
      title: "Image Twp",
      desc: "this is our second card in react js",
    },
  ];

  return (
    <div className="cardSection">
      {cardData.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
  );
};

export default CardSection;
