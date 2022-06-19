import { actions } from "./actionType";

const initState = {
  loading: false,
  token: null,
  auth: false,
  error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actions.REGISTER_USER_REQUEST: {
      return {
        ...state,
        auth: false,
        loading: true,
        error: false,
      };
    }
    case actions.REGISTER_USER_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        loading: false,
        auth: true,
        token: payload,
        error: false,
      };
    }
    case actions.REGISTER_USER_REQUEST: {
      return {
        ...state,
        auth: false,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
