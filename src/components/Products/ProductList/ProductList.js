import React from "react";
// Components
import { Product } from "../";
// styled-components
import Wrapper from "./ProductList.styles";

export default function ProductList(props) {
  const { title, products } = props;
  return (
    <Wrapper>
      <section className="section">
        <h2 className="section-title">{title}</h2>
        <div className="products-center">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
