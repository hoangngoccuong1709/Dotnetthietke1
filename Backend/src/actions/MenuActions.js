import * as types from "../constants/type";

export const getMenu = () => {
  return {
    url: "/menu",
    method: "get",
    acction: {
      success: acction.setMenu,
    },
  };
};
export const addMenu = (nameMenu, linkto, type, option) => ({
  type: types.ADD_MENU,
  nameMenu,
  linkto,
  type,
  option,
});

export const EditMenu = (id) => ({
  type: types.EDIT_MENU,
  id,
});

export const DeleteMenu = (id) => ({
  type: types.DELETE_MENU,
  id,
});
