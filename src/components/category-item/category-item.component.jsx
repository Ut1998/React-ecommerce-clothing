import React from "react";
import { Link } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link
        className="category-body-container"
        to={`shop/${title.toLowerCase()}`}
      >
        <h2>{title}</h2>
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
