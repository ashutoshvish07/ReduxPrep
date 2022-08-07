import * as types from "./action.type";

const init = {
  isAuth: false,
  isAuthLoading: false,
  token: "",
};

export const reducer = (oldState = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: false,
        token: "",
      };
    default:
      return oldState;
  }
};
