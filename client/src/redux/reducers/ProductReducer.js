import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST_DETAILS,
  PRODUCT_LIST_SUCCESS_DETAILS,
  PRODUCT_LIST_FAIL_DETAILS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL

} from "../types/Product";

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: "",
  success: "",
};

export const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
  }
}

    
export const getProductDetails = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST_DETAILS:
      return { loading: true };

    case PRODUCT_LIST_SUCCESS_DETAILS:
      return { loading: false, product: action.payload };
    case PRODUCT_LIST_FAIL_DETAILS:
      return { loading: false, error: action.payload };
    case PRODUCT_LIST_FAIL_DETAILS:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
  }
}
      export const creatProductReducer = (state = initialState, action) => {
        switch (action.type) {

          case PRODUCT_CREATE_REQUEST:
            return { loading: true };
          case PRODUCT_CREATE_SUCCESS:
            return {
              loading: false,
              success: action.successMessage,
            };
          case PRODUCT_CREATE_FAIL:
            return { product: {} };


          case PRODUCT_DELETE_REQUEST:
            return { loading: true };
          case PRODUCT_DELETE_SUCCESS:
            return { loading: false, product: action.payload, success: true };
          case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };

          default:
            return state;
        }
}


