import {
  GET_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  updateProducts,
  getProductById,
  DELETE_PRODUCT,
  SET_SAVE_EDIT_PRODUCT,
  FETCH_PRODUCT_SAVE_EDIT_SUCCESS,
  resetProduct,
  SAVE_PRODUCT,
  FETCH_PRODUCT_DELETE_SUCCESS,
  FETCH_PRODUCT_DELETE_ERROR
  
} from "../Actions/products";
import { apiRequest } from "../Actions/api";
import {showLoader, hideLoader, PRODUCT_EDIT_STARTED, finishEditProduct} from "../Actions/ui";

export const getProductsFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_PRODUCTS) {
    console.log("Middleware get products")
    dispatch(
      apiRequest(
        "/products",
        "GET",
        null,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};

export const productById= ({ dispatch }) => next => action => {
  next(action);
  console.log("Middleware product by id")
  if (action.type === PRODUCT_EDIT_STARTED) {
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "GET",
        null,
        FETCH_PRODUCT_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};
export const processProductsCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCTS_SUCCESS) {
    dispatch(updateProducts(action.payload));
    dispatch(hideLoader());
  }
}
export const processProductCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCT_SUCCESS) {
    dispatch(getProductById(action.payload));
    dispatch(hideLoader());
  }
}

export const saveProductById = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === SET_SAVE_EDIT_PRODUCT) {
    dispatch(showLoader());
    const state = getState();
    dispatch(
      apiRequest(
        `/products`,
        "PUT",
        { body: state.products.product },
        FETCH_PRODUCT_SAVE_EDIT_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
  }
};

export const processSaveEditProductCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCT_SAVE_EDIT_SUCCESS) {
    dispatch(hideLoader());
    dispatch(finishEditProduct());
    dispatch(resetProduct());
  }
}

export const deleteProduct = ({ dispatch }) => next => action => {
  next(action);
  
  if (action.type === DELETE_PRODUCT) {
    console.log("Middleware delete product id= "+action.payload)
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "DELETE",
        null,
        FETCH_PRODUCT_DELETE_SUCCESS,
        FETCH_PRODUCT_DELETE_ERROR
      )
    );
    //dispatch(showLoader());
  }
};

export const processProductDelete = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCT_DELETE_SUCCESS) {
    console.log("Middleware FETCH_PRODUCT_DELETE_SUCCESS")
    //dispatch(getProducts());
    dispatch(hideLoader());
  }
}

export const saveProduct= ({ dispatch }) => next => action => {
  next(action);

  if (action.type === SAVE_PRODUCT) {
    
    dispatch(showLoader());
    dispatch(
      apiRequest(
        "/products",
        "POST",
        { body: { product: action.payload } },
        GET_PRODUCTS,
        FETCH_PRODUCTS_ERROR
      )
    );
  }
};
export const productsMdl = [
  getProductsFlow,
  processProductsCollection,
  productById,
  processProductCollection,
  saveProductById,
  processSaveEditProductCollection,
  deleteProduct,
  processProductDelete,
  saveProduct
];
