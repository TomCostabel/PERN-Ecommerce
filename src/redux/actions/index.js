import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const ADD_PRODUCT_CARRITO = "ADD_PRODUCT_CARRITO";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const ADD_PRODUCT_FAVORITE = "ADD_PRODUCT_FAVORITE";
export function getAllProducts() {
    return async function (dispatch) {
        try {
            let res = await axios.get("products");
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function addProductCarrito(payload, data) {
    try {
        return {
            type: ADD_PRODUCT_CARRITO,
            payload,
            data,
        };
    } catch (err) {
        console.log(err);
    }
}
export function filterByCategory(payload) {
    return {
        type: FILTER_BY_CATEGORY,
        payload,
    };
}
export function filterByName(payload) {
    return {
        type: FILTER_BY_NAME,
        payload,
    };
}
// export function addFav(payload) {
//     try {
//         return {
//             type: ADD_PRODUCT_FAVORITE,
//             payload,
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }
