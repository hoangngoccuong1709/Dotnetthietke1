import { CREATE_ORDER, CLEAR_CART } from "../reducer/types";
export const addToCart = (Writedetails) => {
  return {
    type: "ADDITEM",
    data: Writedetails,
  };
};

export const removeFormCart = (data) => {
  return {
    type: "DELITEM",
    payload: data,
  };
};

export const createOrder = (order) => (dispatch) => {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};
