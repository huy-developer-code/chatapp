import * as types from "../constant/index";
import { getApi } from "../apis/index";

export const fetchAPIRequest = () => {
    return (dispatch) => {
        return getApi("sv", "GET", null).then((res) => {
            if (res !== undefined) {
                dispatch(fetchAPI(res.data));
            } else {
                var data = JSON.parse(localStorage.getItem("sv"));
                dispatch(fetchAPI(data));
            }
        });
    };
};
export const fetchAPI = (sv) => {
    return {
        type: types.FETCH_API,
        sv,
    };
};
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return getApi(`sv`, "POST", product).then((res) => {
            if (res !== undefined) {
                dispatch(actAddProduct(res.data));
            } else {
                var data = JSON.parse(localStorage.getItem("sv"));
                dispatch(actAddProduct(data));
            }
        });
    };
};
export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product,
    };
};
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        console.log("delete");
        return getApi(`sv/${id}`, "DELETE", null).then((res) => {
            if (res !== undefined) {
                dispatch(actDeleteProduct(res.data));
            } else {
                var data = JSON.parse(localStorage.getItem("sv"));
                dispatch(actDeleteProduct(data));
            }
        });
    };
};
export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id,
    };
};
export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return getApi(`sv/${id}`, "GET", null).then((res) => {
            if (res !== undefined) {
                dispatch(actEditProduct(res.data));
            } else {
                var data = JSON.parse(localStorage.getItem("sv"));
                dispatch(actEditProduct(data));
            }
        });
    };
};
export const actEditProduct = (value) => {
    return {
        type: types.EDIT_PRODUCT,
        value,
    };
};
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return getApi(`sv/${product.id}`, "PUT", product).then((res) => {
            if (res !== undefined) {
                dispatch(actUpdateProduct(res.data));
            } else {
                var data = JSON.parse(localStorage.getItem("sv"));
                dispatch(actUpdateProduct(data));
            }
        });
    };
};
export const actUpdateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product,
    };
};
