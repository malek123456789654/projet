import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
function ProductList({ imageUrl, name, prix, description, productId }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <p className="info-name">product1</p>
        <p className="info-description">{description.substring(0, 100)}...</p>
        <p className="info-price">{prix}</p>
        <Link to={`/product/${productId}`} className="info-button">
          view
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
