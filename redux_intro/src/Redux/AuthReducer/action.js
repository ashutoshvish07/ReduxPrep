import * as types from "./action.type";

export const loginRequest = () => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailure = () => {
  return {
    type: types.USER_LOGIN_FAILURE,
  };
};
