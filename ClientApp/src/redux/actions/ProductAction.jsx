import axios from 'axios';
import {
    REMOVE_SELECT_PRODUCT
} from '../constants/post';

export const deleteSelectProduct = (id) =>{
    return {
        type:REMOVE_SELECT_PRODUCT,
        payload:id,
    };
};
export const delelteProduct = (id) => {
    return async (dispatch) =>{
        dispatch(deleteSelectProduct(id));
        try {
          console.log(id); // this is for test, and i see in console that proper id is printed
          await axios.delete(`/api/v1/product/${id}`);
        } catch (err) {
          console.log(err);
        }
    }
}
