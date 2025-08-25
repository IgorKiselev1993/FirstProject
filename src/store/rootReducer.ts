import {postSlice} from './entities/postSlice.ts';
import {combineReducers} from 'redux';
import {weatherSlice} from './entities/weatherSlice.ts';

export const rootReducer = combineReducers({
    posts: postSlice.reducer,
    weather: weatherSlice.reducer,
});
