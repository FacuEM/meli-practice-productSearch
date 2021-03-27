import React from "react";
import ShippingLogo from "./../../../assets/shipping.png";
import "../styles.scss";

const ResultItem = ({ item }) => {
  return (
    <div className="container">
      <img src={item.picture} alt="Product image" className="productImg" />
      <div className="details">
        <p className="price">
          $ {item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          {item.freeShipping ? (
            <img src={ShippingLogo} alt="Shipping Logo" />
          ) : null}
        </p>
        <p className="title">{item.title}</p>
      </div>
    </div>
  );
};

export default ResultItem;
