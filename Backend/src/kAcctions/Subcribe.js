import { actions } from "../kReducer/Subscribe";

export const getList = () => {
  return {
    url: "/api/subscribe",
    method: "GET",
    actions: {
      success: actions.setList,
    },
  };
};
