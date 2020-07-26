import styled from "styled-components";

const Wrapper = styled.article`
  .product {
    background: var(--mainWhite);
    margin-bottom: 2rem;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 19.69rem; /* 19.69*/
    img {
      min-height: 9rem;
    }
    &:hover {
      box-shadow: var(--darkShadow);
    }
    &:hover .product-link {
      opacity: 1;
    }
    &:hover img {
      opacity: 0.3;
    }
  }
  .product-footer {
    padding: 0rem 1rem 1rem 1rem;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .product-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .product-price {
    color: var(--primaryColor);
    font-weight: bold;
    margin-bottom: 0;
    font-size: 1.1rem;
  }
  .product-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--mainTransition);
  }
`;

export default Wrapper;
