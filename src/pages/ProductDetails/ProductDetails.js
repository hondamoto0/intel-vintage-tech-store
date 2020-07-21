import React, { useContext } from "react";
// react-router-dom
import { useParams, useHistory } from "react-router-dom";
// Context API
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
// HOC
import Loading from "../../components/Loading/Loading";
// styled-components
import Wrapper from "./ProductDetails.styles";
export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { products } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);
  let product = products.find(product => product.id === +id);
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (
      <Wrapper>
        <div className="single-product">
          <img src={image} alt={title} className="single-product-image" />
          <article>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p>{description}</p>
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                addProduct(product);
                history.push("/cart");
              }}
            >
              add to cart
            </button>
          </article>
        </div>
      </Wrapper>
    );
  }
}
