import * as types from "./actionTypes";

import { loadData,saveData } from "../../Utils/LocalStore";
const init = {
  counter: loadData("counter")||5,
  todos: [],
  isLoading: false,
  isError: true,
  
};

const reducer = (oldState = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.INCEREMENT:
      let newCountINC = oldState.counter +payload
      saveData("counter",newCountINC)
      // console.log(oldState);
      return { ...oldState, counter: newCountINC };
    case types.DECEREMENT:
      let newCountDEC = oldState.counter -payload
      saveData("counter",newCountDEC)
      return { ...oldState, counter: newCountDEC };
    case types.GET_TODOS_REQUEST:
      return { ...oldState, isLoading: true, isError: false };
    case types.GET_TODOS_SUCCESS: //3. if data fetching success it will  the state
      return { ...oldState, isLoading: false, isError: false,todos:[...payload] };
    case types.GET_TODOS_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    default:
      return oldState;
  }
};

export { reducer };
