import React, { useContext } from "react";
import ProductCart from "../../components/product-cart/product-cart.component";
import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart product={product} />
      ))}
    </div>
  );
};

export default Shop;
