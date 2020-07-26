import { INCREASE, ADD_TO_CART, DECREASE, CLEAR_CART, REMOVE } from "./actions";
export default (state, action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter(item => item.id !== action.payload);
    case INCREASE:
      console.log("go here");
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });

    case DECREASE: {
      const id = action.payload;
      return state.map(item => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      });
    }
    case ADD_TO_CART: {
      const { id, image, title, price } = action.payload;
      let product = { id, image, title, price, amount: 1 };
      return [...state, product];
    }

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
