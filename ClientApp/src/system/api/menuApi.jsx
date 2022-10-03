import axiosClient from './axiosApi'

const END_POINT ={
    MENU : '/menu',
    LOGO : '/logo',
    ICON : '/icon',
    HEADER: '/header'
}

export const getMenuApi = ()=>{
    return axiosClient.get(`${END_POINT.MENU}`);
}
export const getIconApi = ()=>{
    return axiosClient.get(`${END_POINT.LOGO}`);
}
export const getLogoApi = ()=>{
    return axiosClient.get(`${END_POINT.ICON}`);
}
export const delMenuApi = (idMenu)=>{
    return axiosClient.delete(`${END_POINT.HEADER}/${idMenu}`)
}