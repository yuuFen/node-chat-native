import {combineReducers, createStore, applyMiddleware} from 'redux';

// import thunk from 'redux-thunk';
// import logger from "redux-logger";

import themeReducer from './themeReducer';
import userReducer from './userReducer';

const store = createStore(
  combineReducers({
    theme: themeReducer,
    user: userReducer,
  }),
  // //applyMiddleware(logger, thunk)
  // applyMiddleware(thunk),
);
export default store;
