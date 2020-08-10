import {combineReducers, createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist'; // redux 状态持久化

import thunk from 'redux-thunk';
// import logger from "redux-logger";

import globalReducer from './globalReducer';
import userReducer from './userReducer';

const globalPersistConfig = {
  key: 'global',
  storage: AsyncStorage,
};
const persistedGlobalReducer = persistReducer(globalPersistConfig, globalReducer);

export const store = createStore(
  combineReducers({
    global: persistedGlobalReducer,
    user: userReducer,
  }),
  // applyMiddleware(logger, thunk)
  applyMiddleware(thunk),
);
export const persistor = persistStore(store);
