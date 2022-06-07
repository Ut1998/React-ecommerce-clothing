import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector.js";

import "./category.styles.scss";

import { useParams } from "react-router-dom";
import ProductCart from "../../components/product-cart/product-cart.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  console.log(products);

  return (
    <Fragment>
      <h1 className="category-name">{category.toLocaleUpperCase()}</h1>
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
