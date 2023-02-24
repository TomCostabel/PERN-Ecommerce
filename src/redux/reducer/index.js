import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_CARRITO,
    FILTER_BY_CATEGORY,
} from "../actions/index.js";

const initialState = {
    productos: [],
    productos2: [],
    productDetail: [],
    carrito: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productos: action.payload,

                productos2: action.payload,
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

        default:
            return state;
    }
};

export default rootReducer;
