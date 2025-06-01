import {postSlice} from '../features/posts/postSlice.ts';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    posts: postSlice.reducer,
});
