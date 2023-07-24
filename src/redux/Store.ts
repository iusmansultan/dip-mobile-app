import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

import UserReduicers from './User/UserSlice';

const reducers = combineReducers({
  user: UserReduicers,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
