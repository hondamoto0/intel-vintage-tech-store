import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styled-components
import Wrapper from "./Product.styles";
// proptypes // impt
import PropTypes from "prop-types";
// image
import img from "../../../assets/mainBcg.jpeg";
function Product(props) {
  const { title, id, price, image } = props;
  return (
    <Wrapper>
      <div className="product">
        <div className="img-container">
          <img src={image || img} alt={title || "default title "} />
          <Link to={`products/${id}`} className="btn btn-primary product-link">
            details
          </Link>
        </div>
        <div className="product-footer">
          <p className="product-title">{title || "default title"}</p>
          <p className="product-price">${price || 0}</p>
        </div>
      </div>
    </Wrapper>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
Product.defaultProps = {
  title: "hello",
  image: "",
  price: 0,
  hello: "ban oi"
};

export default Product;
