import * as types from "./action.type";

export const getTaskRequest = () => {
  return {
    type: types.GET_TASKS_REQUEST,
  };
};
export const getTaskSuccess = (payload) => {
  return {
    type: types.GET_TASKS_SUCCESS,
    payload
  };
};
export const getTaskFailure = () => {
  return {
    type: types.GET_TASKS_FAILURE,
  };
};
