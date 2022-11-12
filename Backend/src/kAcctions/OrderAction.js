import { actions } from "../kReducer/OrderReducer";
//import { setList, setLoginError } from "../kReducer/OrderReducer";
export const getList = () => {
  return {
    url: "/api/product",
    method: "GET",
    actions: {
      success: actions.setList,
    },
  };
};
// export const removeOrder = (id) => {
//   return {
//     url: `/api/order/${id}`,
//     method: "DELETE",
//     actions: {
//       success: actions.removeOrder,
//     },
//   };
// };

// export const updateOrder = (id, body) => {
//   console.log("action data", id, body);
//   return {
//     url: `/api/order/${id}`,
//     method: "PUT",
//     params: body,
//     actions: {
//       success: actions.updateOrder,
//     },
//   };
// };
