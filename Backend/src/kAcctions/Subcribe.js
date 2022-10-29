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

export const addNewSub = (body) => {
  console.log(body);
  return {
    url: "/api/subscribe",
    method: "POST",
    params: body,
    actions: {
      success: actions.addNew,
    },
  };
};

export const removeSub = (id) => {
  return {
    url: `/api/subscribe/${id}`,
    method: "DELETE",
    actions: {
      success: actions.addNew,
    },
  };
};
