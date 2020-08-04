import {combineReducers, createStore, applyMiddleware} from 'redux';

// import thunk from 'redux-thunk';
// import logger from "redux-logger";

import themeReducer from './themeReducer';

const store = createStore(
  combineReducers({
    theme: themeReducer,
  }),
  // //applyMiddleware(logger, thunk)
  // applyMiddleware(thunk),
);
export default store;
