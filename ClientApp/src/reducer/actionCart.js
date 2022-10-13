import * as actionType from "./types";

export const addToCart = (Writedetails) => {
  alert("Đã thêm vào giỏ hàng");
  console.log("dâda", Writedetails);
  return {
    type: actionType.ADD_TO_CART,
    payload: Writedetails,
  };
};
console.log("dada", addToCart.prototype);
export const deleteProduct = (Writedetails) => {
  return {
    type: actionType.REMOVE_FORM_CART,
    payload: Writedetails,
  };
};
export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
