import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherData} from '../../component/types/WeatherData.ts';
import {getWeather} from '../weather/thunkWeather.ts';
import {RootState} from '../store.ts';

type WeatherStatePost = {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
};

type WeatherState = Record<string, WeatherStatePost>;

const initialState: WeatherState = {};

const selectWeatherState = (state: RootState) => state.weather;

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearError(state, action: PayloadAction<string>) {
      const postId = action.payload;
      if (state[postId]) {
        state[postId].error = null;
      }
    },
    clearWeather(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        const postId = action.meta.arg.postId;
        state[postId] = {
          weather: null,
          loading: true,
          error: null,
        };
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        const {postId, weather} = action.payload;
        state[postId] = {
          weather,
          loading: false,
          error: null,
        };
      })
      .addCase(getWeather.rejected, (state, action) => {
        const postId = action.meta.arg.postId;
        const message = action.payload?.message ?? 'Неизвестная ошибка';
        state[postId] = {
          weather: null,
          loading: false,
          error: message,
        };
      });
  },
});

export const {clearError, clearWeather} = weatherSlice.actions;
export const isWeatherLoading = createSelector(
  (state: RootState) => state.weather,
  weatherMap => Object.values(weatherMap).some(p => p.loading),
);
export const selectWeatherByPost = (postId: string) =>
  createSelector([selectWeatherState], weatherState => {
    const postWeather = weatherState[postId];
    if (!postWeather) {
      return {
        loading: false,
        error: null,
        weather: null,
      };
    }
    return postWeather;
  });
