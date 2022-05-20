import React from "react";

import "./product-cart.styles.scss";

import Button from "../Button/button.component";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-cart-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{` $${price}`}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCart;
