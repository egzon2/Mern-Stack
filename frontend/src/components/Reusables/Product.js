import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { useTranslation } from 'react-i18next';

const Product = ({ product }) => {
  console.log("product",product)
  const { t, i18n } = useTranslation();
  const {currency} = useState();

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={product.images[0]} />
      </div>

      <div className="product-info-container">
        <h5 className="product-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h5>
        <div className="product-rating">
          <Rating value={product.rating} />
        </div>
        <div className="price-details-container">
          <div className="product-details">
            <Link to={`/product/${product._id}`}>Details</Link>
          </div>
          <div className="product-price">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
