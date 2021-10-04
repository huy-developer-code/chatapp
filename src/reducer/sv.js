import * as types from "../constant/index";

var init = [];
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
};
const sv = (state = init, action) => {
    var index = -1;
    var { id, product } = action;
    switch (action.type) {
        case types.FETCH_API:
            state = action.sv;
            localStorage.setItem("sv", JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default:
            return [...state];
    }
};

export default sv;
