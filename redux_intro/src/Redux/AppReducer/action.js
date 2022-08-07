import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_FAILURE,
} from "./actionTypes";
export const handleDec = () => {
  return { type: "DECEREMENT", payload: 2 };
};

export const handleInc = () => {
  return { type: "INCEREMENT", payload: 5 };
};

export const todosRequest = () => {
  return { type: GET_TODOS_REQUEST };
};
export const todosSuccess = (payload) => {
  return { type: GET_TODOS_SUCCESS, payload }; //2. telling reducer what to do
};
export const todosFailure = () => {
  return { type: GET_TODOS_FAILURE };
};

export const addTodoRequest = () => {
  return { type: ADD_TODOS_REQUEST };
};
export const addTodoSucess = () => {
  return { type: ADD_TODOS_SUCCESS };
};
export const addTodoFailure = () => {
  return { type: ADD_TODOS_FAILURE };
};
