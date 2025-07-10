import {openWeatherUrl, openWeatherApiKey} from '../constant/apiKey.ts';
import {WeatherData} from '../component/types/WeatherData.ts';
import {Alert} from 'react-native';

export const getWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData | null> => {
  try {
    const url = `${openWeatherUrl}lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=metric&lang=ru`;

    const response = await fetch(url);
    console.log('HTTP статус:', response.status);

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
      Alert.alert('Ошибка запроса погоды:', error.message);
      console.log(error.message);
      return null;
    } else {
      console.log('Unknown error:', error);
      return null;
    }
  }
};
