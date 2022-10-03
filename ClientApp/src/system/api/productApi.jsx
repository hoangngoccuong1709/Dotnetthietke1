import axios from "axios";
import axiosClient from "./axiosApi";

const END_POINT = {
    PRODUCT : '/v1/product'
}

export const getAPI = ()=>{
    return axiosClient.get(`${END_POINT.PRODUCT}`);
}
export const delProductApi = (id)=>{
    return axios.delete(`${END_POINT.PRODUCT}/${id}`);
}
