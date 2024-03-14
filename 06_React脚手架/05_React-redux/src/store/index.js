import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import categoryReducer from "./category";
import counterReducer from "./counter";

// const reducer = combineReducers({
//   counter: counterReducer,
//   category: categoryReducer,
// });

const reducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
    category: categoryReducer(state.category, action),
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
