import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
const rootReducer = combineReducers({ AppReducer, AuthReducer });

// store 
// next  -> go to the next middleware if available, else go to reducer function
// action -> action object that will get from the dispatch method
// keep track of the api calls made
// analytics

const logger = (store) => (next)=> (action) =>{

    console.log("logger -<",action)
    return next(action)
}


const store = legacy_createStore(
  rootReducer,
  applyMiddleware(logger)
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
