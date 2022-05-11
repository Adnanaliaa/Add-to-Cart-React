import React from "react";
import "../App.css";

const Cards = (props) => {
  const { title, image, price, quantity, weight } = props.item;

  return (
    <div className="card" key={props.key}>
      <h2>{title} </h2>
      <img src={image} width="100%" height="100px" />
      <div>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Weight: {weight}</p>
      </div>
      <button onClick={() => props.showAlert(props.item)}>Add To Cart</button>
    </div>
  );
};
export default Cards;
