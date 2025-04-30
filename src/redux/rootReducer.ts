import {combineReducers} from 'redux';
import postReducer from './features/post/postSlice.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['posts'],
};

const rootReducer = combineReducers({
    posts: postReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
