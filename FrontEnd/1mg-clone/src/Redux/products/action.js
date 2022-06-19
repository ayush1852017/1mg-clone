import { actions } from "./actionType";
import axios from "axios";
export const getProductsRequest = () => ({
  type: actions.GET_PRODUCTS_REQUEST,
});
export const getProductsSuccess = (data) => ({
  type: actions.GET_PRODUCTS_SUCCESS,
  payload: data,
});
export const getProductsFailure = () => ({
  type: actions.GET_PRODUCTS_FAILURE,
});
export const getAyurvedaRequest = () => ({
  type: actions.GET_AYURVEDA_REQUEST,
});
export const getAyurvedaSuccess = (data) => ({
  type: actions.GET_AYURVEDA_SUCCESS,
  payload: data,
});
export const getAyurvedaFailure = () => ({
  type: actions.GET_AYURVEDA_FAILURE,
});
export const getHealthconcernsRequest = () => ({
  type: actions.GET_HEALTHCONCERN_REQUEST,
});
export const getHealthconcernsSuccess = (payload) => ({
  type: actions.GET_HEALTHCONCERN_SUCCESS,
  payload,
});
export const getHealthconcernsFailure = () => ({
  type: actions.GET_HEALTHCONCERN_FAILURE,
});
export const getCategoriesRequest = () => ({
  type: actions.GET_CATEGORY_REQUEST,
});
export const getCategoriesSuccess = (payload) => ({
  type: actions.GET_CATEGORY_SUCCESS,
  payload,
});
export const getCategoriesFailure = () => ({
  type: actions.GET_CATEGORY_FAILURE,
});
export const getBpRequest = () => ({
  type: actions.GET_BPDATA_REQUEST,
});
export const getBpSuccess = (payload) => ({
  type: actions.GET_BPDATA_SUCCESS,
  payload,
});
export const getBpFailure = () => ({
  type: actions.GET_BPDATA_FAILURE,
});
export const getComboRequest = () => ({
  type: actions.GET_COMBO_REQUEST,
});
export const getComboSuccess = (payload) => ({
  type: actions.GET_COMBO_SUCCESS,
  payload,
});
export const getComboFailure = () => ({
  type: actions.GET_COMBO_FAILURE,
});
export const getHomeProductsRequest = () => ({
  type: actions.GET_HOMEPRODUCTS_REQUEST,
});
export const getHomeProductsSuccess = (payload) => ({
  type: actions.GET_HOMEPRODUCTS_SUCCESS,
  payload,
});
export const getHomeProductsFailure = (payload) => ({
  type: actions.GET_HOMEPRODUCTS_FAILURE,
});
export const getTrendingProductsRequest = () => ({
  type: actions.GET_TRENDINGPRODUCT_REQUEST,
});
export const getTrendingProductsSuccess = (payload) => ({
  type: actions.GET_TRENDINGPRODUCT_SUCCESS,
  payload,
});
export const getTrendingProductsFailure = () => ({
  type: actions.GET_TRENDINGPRODUCT_FAILURE,
});

export const getProductsData = () => (dispatch) => {
  dispatch(getProductsRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/products",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      dispatch(getProductsSuccess(res.data.med));
    })
    .catch((err) => {
      dispatch(getProductsFailure(err));
    });
};
export const getAyurvedaData = () => (dispatch) => {
  dispatch(getAyurvedaRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/ayurveda",
    method: "GET",
  })
    .then((res) => {
      dispatch(getAyurvedaSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAyurvedaError(err));
    });
};

export const getHealthconcernsData = () => (dispatch) => {
  dispatch(getHealthconcernsRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/healthconcerns",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getHealthconcernsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getHealthconcernsFailure(err));
    });
};
export const getCategoriesData = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/categories",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getCategoriesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getCategoriesFailure(err));
    });
};
export const getBpData = () => (dispatch) => {
  dispatch(getBpRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/bp",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getBpSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBpFailure(err));
    });
};
export const getComboData = () => (dispatch) => {
  dispatch(getComboRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/combo",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getComboSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getComboFailure(err));
    });
};
export const getHomeProductsData = () => (dispatch) => {
  dispatch(getHomeProductsRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/homeproduct",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getHomeProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getHomeProductsFailure(err));
    });
};
export const getTrendingProductsData = () => (dispatch) => {
  dispatch(getTrendingProductsRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/trendingdata",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(getTrendingProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getTrendingProductsFailure(err));
    });
};
