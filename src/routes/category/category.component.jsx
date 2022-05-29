import React, { Fragment, useContext, useEffect, useState } from "react";

import "./category.styles.scss";

import { useParams } from "react-router-dom";
import ProductCart from "../../components/product-cart/product-cart.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  console.log(products);

  return (
    <Fragment>
      <h1 className="category-name ">{category.toLocaleUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
