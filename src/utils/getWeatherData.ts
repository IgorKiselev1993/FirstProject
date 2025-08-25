import {WeatherData} from '../component/types/WeatherData.ts';
import {axiosInstance} from '../api/axiosInstance.ts';

export const getWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  const response = await axiosInstance.get('/weather', {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });

  const data = response.data;

  return {
    city: data.name,
    temperature: data.main.temp,
    icon: data.weather[0].icon,
    description: data.weather[0].description,
  };
};
