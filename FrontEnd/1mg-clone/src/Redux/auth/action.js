import { actions } from "./actionType";
import axios from "axios";
export const registerRequest = () => ({
  type: actions.REGISTER_USER_REQUEST,
});
export const registerSuccess = (data) => ({
  type: actions.REGISTER_USER_SUCCESS,
  payload: data,
});
export const registerFailure = () => ({
  type: actions.REGISTER_USER_FAILURE,
});

export const registerUser = (payload) => (dispatch) => {
  dispatch(registerRequest());
  axios({
    url: "https://onemg-clone.herokuapp.com/register",
    method: "POST",
    data: payload,
  })
    .then((res) => {
      console.log(res.data.token);
      dispatch(registerSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(registerFailure(err));
    });
};
