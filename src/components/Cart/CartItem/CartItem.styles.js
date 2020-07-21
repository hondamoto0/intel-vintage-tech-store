import styled from "styled-components";

const Wrapper = styled.article`
  .cart-item {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
    img {
      width: 10rem;
    }
  }
  .item-amount {
    text-align: center;
    margin-bottom: 0;
  }
  .cart-items-controls {
    display: flex;
    flex-direction: column;
  }
  .cart-btn {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .remove-btn {
    color: var(--darkGrey);
    letter-spacing: var(--mainSpacing);
    cursor: pointer;
    font-size: 0.8rem;
  }
  .amount-btn {
    color: var(--primaryColor);
    font-size: 1rem;
  }
`;

export default Wrapper;
