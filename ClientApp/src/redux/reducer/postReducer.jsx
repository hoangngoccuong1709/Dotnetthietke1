// import constants
import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
} from '../constants/post';

// khởi tạo một init state
const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
    data2:null,
    data3:null
}

// bắt từng action type
function postReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
                data2: payload.data2,
                data3: payload.data3
            };
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };

        default:
            return state;
    }
}

export default postReducers;