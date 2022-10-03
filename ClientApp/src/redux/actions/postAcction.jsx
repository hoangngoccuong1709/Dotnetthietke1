import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
} from '../constants/post';

export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: FETCH_POST_REQUEST});
        const urlmenu = `/api/menu`;
        const urlicon = `/api/icon`;
        const urllogo = `/api/logo`;
        const urlproduct = `api/v1/product`
//fetch api header
        const responseMenu = await fetch(urlmenu);
        const responseIcon = await fetch(urlicon);
        const responseLogo = await fetch(urllogo);

        const responseBody = await responseMenu.json();
        const responseBodyICon = await responseIcon.json();
        const responseBodyLogo = await responseLogo.json();
        
//fetch api product
        const responseProduct = await fetch(urlproduct,{method:'get'})
        const responseAllProduct = await responseProduct.json();


        dispatch({
            type: FETCH_POST_SUCCESS,
            data: responseBody,
            data2: responseBodyICon,
            data3: responseBodyLogo,
            allProduct: responseAllProduct
        
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POST_ERROR,
            message: error
        });
    }
}