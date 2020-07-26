import React, { createContext, useState, useReducer, useEffect } from "react";
// Cart-reducer
import reducer from "./cart/reducer";
// constant actions
import {
  REMOVE,
  INCREASE,
  DECREASE,
  ADD_TO_CART,
  CLEAR_CART
} from "./cart/actions";
// lấy Cart từ local Storage
function getCartFromLocalStorage() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  return cart;
}

// Create Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    // lưu Cart lên local Storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // tính số lượng cartItem có trong Cart
    let cartAmount = cart.reduce((sum, item) => (sum += item.amount), 0);
    // tính tổng số tiền trong Cart
    let totalCart = cart.reduce(
      (total, item) => (total += item.amount * item.price),
      0
    );
    totalCart = +totalCart.toFixed(2);
    setCartItems(cartAmount);
    setTotal(totalCart);
  }, [cart]);
  // Xoá CartItem trong Cart
  const removeItem = id => {
    dispatch({ type: REMOVE, payload: id });
    // const tempCart = [...cart];
    // const newTempCart = tempCart.filter(item => item.id !== id);
    // setCart(newTempCart);
  };

  const increseAmount = id => {
    console.log(id);
    dispatch({ type: INCREASE, payload: id });
    // const tempCart = [...cart];
    // let tempProduct = tempCart.find(item => item.id === id);
    // tempProduct.amount += 1;
    // const newTempCart = tempCart.map(item => {
    //   return item.id === id ? { ...tempProduct } : item;
    // });
    // setCart(newTempCart);
  };

  const descreseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: REMOVE, payload: id });
    } else {
      dispatch({ type: DECREASE, payload: id });
    }
    // const tempCart = [...cart];
    // const existingCartItem = tempCart.find(cartItem => cartItem.id === id);
    // if (existingCartItem.amount) {
    //   if (existingCartItem.amount === 1) {
    //     removeItem(id);
    //   } else {
    //     existingCartItem.amount = existingCartItem.amount - 1;
    //     const newTempCart = tempCart.map(cartItem =>
    //       cartItem.id === existingCartItem.id ? existingCartItem : cartItem
    //     );
    //     setCart(newTempCart);
    //   }
    // }
  };

  const addProduct = product => {
    let item = [...cart].find(item => item.id === product.id);
    if (item) {
      dispatch({ type: INCREASE, payload: product.id });
    } else {
      dispatch({ type: ADD_TO_CART, payload: product });
    }
    // const { id, title, price, image } = product;
    // const existingCartItem = [...cart].find(cartItem => cartItem.id === id);
    // if (existingCartItem) {
    //   increseAmount(id);
    // } else {
    //   const newItem = { id, title, price, image, amount: 1 };
    //   const newCart = [...cart, newItem];
    //   setCart(newCart);
    // }
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    // setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increseAmount,
        descreseAmount,
        addProduct,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
