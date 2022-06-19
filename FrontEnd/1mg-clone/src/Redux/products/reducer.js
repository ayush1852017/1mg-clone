import { actions } from "./actionType";

const initState = {
  loading: false,
  healthData: [],
  categoryData: [],
  ayurvedaData: [],
  bpData: [],
  comboData: [],
  homeProductsData: [],
  trendingData: [],
  products: [],
  error: false,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actions.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
        error: false,
      };
    }
    case actions.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_HEALTHCONCERN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_HEALTHCONCERN_SUCCESS: {
      return {
        ...state,
        loading: false,
        healthData: payload,
        error: false,
      };
    }
    case actions.GET_HEALTHCONCERN_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        categoryData: payload,
        error: false,
      };
    }
    case actions.GET_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_AYURVEDA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_AYURVEDA_SUCCESS: {
      return {
        ...state,
        loading: false,
        ayurvedaData: payload,
        error: false,
      };
    }
    case actions.GET_AYURVEDA_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_BPDATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_BPDATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        bpData: payload,
        error: false,
      };
    }
    case actions.GET_BPDATA_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_COMBO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_COMBO_SUCCESS: {
      return {
        ...state,
        loading: false,
        comboData: payload,
        error: false,
      };
    }
    case actions.GET_COMBO_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_HOMEPRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_HOMEPRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        homeProductsData: payload,
        error: false,
      };
    }
    case actions.GET_HOMEPRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_TRENDINGPRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.GET_TRENDINGPRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        trendingData: payload,
        error: false,
      };
    }
    case actions.GET_TRENDINGPRODUCT_FAILURE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
