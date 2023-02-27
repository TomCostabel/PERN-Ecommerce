import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const ADD_PRODUCT_CARRITO = "ADD_PRODUCT_CARRITO";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

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
// export function getProductDetail(id, title) {
//     return async function (dispatch) {
//         try {
//             console.log("xdddddddddddddddddd", title);
//             const res = await axios.get("https://dummyjson.com/products/" + id);
//             dispatch({
//                 type: GET_PRODUCT_ID,
//                 payload: res.data.products,
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     };
// }
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
