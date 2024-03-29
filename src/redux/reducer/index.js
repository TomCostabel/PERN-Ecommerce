import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_CARRITO,
    FILTER_BY_CATEGORY,
    FILTER_BY_NAME,
    ADD_PRODUCT_FAVORITE,
} from "../actions/index.js";

const initialState = {
    productos: [],
    productos2: [],
    productDetail: [],
    carrito: [],
    productosInput: "",
    prodFav: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productos: action.payload.sort(function (a, b) {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }

                    return 0;
                }),

                productos2: action.payload.sort(function (a, b) {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }

                    return 0;
                }),
            };
        case GET_PRODUCT_ID:
            return {
                ...state,
                productDetail: action.payload,
            };
        case ADD_PRODUCT_CARRITO:
            let changuito =
                JSON.parse(localStorage.getItem(action.data.toString())) || [];

            localStorage.setItem(
                action.data.toString(),
                JSON.stringify([...changuito, action.payload])
            );
            return {
                ...state,
                carrito: [...state.carrito, action.payload],
            };
        case FILTER_BY_CATEGORY:
            const productos2 = state.productos2;
            const filterCategory =
                action.payload === "all"
                    ? productos2
                    : productos2?.filter((e) => e.category === action.payload);

            return {
                ...state,
                productos: filterCategory,
            };
        case FILTER_BY_NAME:
            return {
                ...state,
                productosInput: action.payload,
            };
        case ADD_PRODUCT_FAVORITE:
            let favLocalStorage =
                JSON.parse(
                    localStorage.getItem(`${action.data}ProductosFavorites`)
                ) || [];
            if (!favLocalStorage.includes(action.payload)) {
                localStorage.setItem(
                    `${action.data}ProductosFavorites`,
                    JSON.stringify([...favLocalStorage, action.payload])
                );
            }
            if (favLocalStorage.includes(action.payload)) {
                let deleteFav = favLocalStorage?.filter(
                    (e) => e !== action.payload
                );
                localStorage.setItem(
                    `${action.data}ProductosFavorites`,
                    JSON.stringify(deleteFav)
                );
            }

            return {
                ...state,
                prodFav: favLocalStorage,
            };
        default:
            return state;
    }
};

export default rootReducer;
