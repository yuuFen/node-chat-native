import {combineReducers, createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
// import logger from "redux-logger";

import globalReducer from './globalReducer';
import userReducer from './userReducer';

const store = createStore(
  combineReducers({
    theme: globalReducer,
    user: userReducer,
  }),
  // //applyMiddleware(logger, thunk)
  applyMiddleware(thunk),
);
export default store;
