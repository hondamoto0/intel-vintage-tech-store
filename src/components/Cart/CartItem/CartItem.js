import React, { useContext } from "react";
// icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
// styled-components
import Wrapper from "./CartItem.styles";
// Context API
import { CartContext } from "../../../context/cart";
export default function CartItem(props) {
  const { removeItem, increseAmount, descreseAmount } = useContext(CartContext);
  const { id, image, title, price, amount } = props;
  return (
    <Wrapper>
      <div className="cart-item">
        <img src={image} alt={title} />
        <div>
          <h4>{title}</h4>
          <h5>${price}</h5>
          <button
            type="button"
            className="cart-btn remove-btn"
            onClick={() => removeItem(id)}
          >
            remove
          </button>
        </div>
        <div className="cart-items-controls">
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => increseAmount(id)}
          >
            <FaAngleUp />
          </button>
          <p className="item-amount">{amount}</p>
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => descreseAmount(id, amount)}
          >
            <FaAngleDown />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
