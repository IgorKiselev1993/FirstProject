import {WeatherData} from '../component/types/WeatherData.ts';
import {Alert} from 'react-native';
import {Locales} from '../constant/locales.ts';
import {apiKey,apiURL} from '../../.env.ts';

export const getWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> => {
  try {
    const url = `${apiURL}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`;

    const response = await fetch(url);
    console.log(Locales.common.http, response.status);

    if (!response.ok) {
      return null;
    }

    const dataWeather = await response.json();

    return {
      city: dataWeather.name,
      temperature: dataWeather.main.temp,
      description: dataWeather.weather[0].description,
      icon: dataWeather.weather[0].icon,
    };
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(Locales.error.weatherRequestErr, error.message);
      console.log(error.message);
      return null;
    } else {
      console.log(Locales.error.unknownErr);
      return null;
    }
  }
};
