import {postSlice} from '../entities/postSlice.ts';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    posts: postSlice.reducer,
});
