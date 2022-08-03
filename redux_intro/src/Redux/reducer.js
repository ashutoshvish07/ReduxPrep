import * as types from "./actionTypes";
const init = {
    counter:5
}

const reducer = (oldState=init, action) => {
   
    
  switch (action.type) {
    case types.INCEREMENT:
        console.log(oldState);  
      return {...oldState,counter:oldState.counter+=action.payload} ;
    case types.DECEREMENT:
      return { ...oldState, counter: oldState.counter -= action.payload };
    default:
      return oldState;
  }
};

export { reducer };
