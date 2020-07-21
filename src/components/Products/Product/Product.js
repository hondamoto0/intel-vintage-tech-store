import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styled-components
import Wrapper from "./Product.styles";

export default function Product(props) {
  const { title, id, price, image } = props;
  return (
    <Wrapper>
      <div className="product">
        <div className="img-container">
          <img src={image} alt={title} />
          <Link to={`products/${id}`} className="btn btn-primary product-link">
            details
          </Link>
        </div>
        <div className="product-footer">
          <p className="product-title">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </div>
    </Wrapper>
  );
}
