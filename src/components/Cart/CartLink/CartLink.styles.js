import styled from "styled-components";

const Wrapper = styled.div`
  .cart-link-container {
    position: relative;
  }
  .cart-link-container a {
    margin-right: 10px;
    font-weight: bolder;
  }
  .cart-link-total {
    display: block;
    position: absolute;
    background: var(--primaryColor);
    top: -10px;
    right: -15px;
    padding: 0rem 0.4rem;
    border-radius: 50%;
    font-size: 1rem;
    color: var(--mainWhite);
  }
`;

export default Wrapper;
