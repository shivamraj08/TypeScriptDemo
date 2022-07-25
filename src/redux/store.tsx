import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger';
import rootReducer from "./rootReducer";
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const enhancer = compose(applyMiddleware(thunk, createLogger({})));
const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: ['VerifyOtpReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
