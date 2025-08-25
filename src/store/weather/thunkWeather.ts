import {createAsyncThunk} from '@reduxjs/toolkit';
import {WeatherData} from '../../component/types/WeatherData.ts';
import {getWeatherData} from '../../utils/getWeatherData.ts';
import {AxiosErrorResponse, handleError} from '../../api/handleError.ts';

type GetWeatherArg = {
  latitude: number;
  longitude: number;
  postId: string;
};

type GetWeatherPayload = {
  postId: string;
  weather: WeatherData;
};

export const getWeather = createAsyncThunk<
  GetWeatherPayload,
  GetWeatherArg,
  {rejectValue: AxiosErrorResponse}
>('/weather', async ({latitude, longitude, postId}, {rejectWithValue}) => {
  try {
    const weather = await getWeatherData(latitude, longitude);

    if (!weather) {
      return rejectWithValue({
        message: 'Погода не найдена',
        status: undefined,
      });
    }
    return {postId, weather};
  } catch (error) {
    const axiosError = await handleError(error);
    return rejectWithValue(axiosError);
  }
});
