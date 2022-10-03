// import constants
import {
    REMOVE_SELECT_PRODUCT,
    SET_PRODUCT,
    ADD_PRODUCT,
} from '../constants/post'

// khởi tạo một init state
const initialState = {
    product : [],
}

// bắt từng action type
 export function ProductReducer(state = initialState, {type,payload}) {
    switch (type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.product, payload]
            };
        case REMOVE_SELECT_PRODUCT:
            return {
                ...state,
                product:state.product.filter((el)=> el.id !==payload ),
            };
        default:
            return state;
    }
}

