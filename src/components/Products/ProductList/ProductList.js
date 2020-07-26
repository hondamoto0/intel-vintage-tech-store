import React from "react";
// Components
import { Product } from "../";
// styled-components
import Wrapper from "./ProductList.styles";
import PropTypes from "prop-types";

function ProductList(props) {
  const { title, products } = props;
  return (
    <Wrapper>
      <section className="section">
        {title && <h2 className="section-title">{title}</h2>}
        <div className="products-center">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
export default ProductList;
