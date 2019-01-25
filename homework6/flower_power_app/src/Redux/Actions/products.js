export const GET_PRODUCTS = '[products] Get all products';
export const UPDATE_PRODUCTS = '[products] Update all products in state';
export const FETCH_PRODUCTS_SUCCESS = '[products] Get all products was successful';
export const FETCH_PRODUCT_SUCCESS = '[product] Get product by id was successful';
export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';
export const FETCH_PRODUCT_SAVE_EDIT_SUCCESS = '[product] Save edit successful';
export const GET_PRODUCT_BY_ID = '[product] Update product by id in state';
export const DELETE_PRODUCT = '[product] Delete product';
export const SAVE_EDIT_PRODUCT = '[product] Save edit product';
export const SET_SAVE_EDIT_PRODUCT = '[product] Set save edit product';
export const RESET_PRODUCT = '[product] Reset product';
export const SET_NAME_PRODUCT = '[product] Set name product';

export const getProducts = () => ({
    type: GET_PRODUCTS
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});
export const getProductById = (product) => ({
    type: GET_PRODUCT_BY_ID,
    payload: product,
});

export const saveProductEdit = (editProduct) => ({
    type: SAVE_EDIT_PRODUCT,
    payload: editProduct,
})
export const setSaveProduct = () => ({
    type: SET_SAVE_EDIT_PRODUCT
})
export const resetProduct = () => ({
    type: RESET_PRODUCT
});
export const setNameProduct= (name) => ({
    type: SET_NAME_PRODUCT,
    payload: name,
})

export const deleteProduct= (id) =>({
    type: DELETE_PRODUCT,
    payload :id
})