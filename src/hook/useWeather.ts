import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {WeatherData} from '../component/types/WeatherData.ts';
import {getPermissions} from '../utils/getPermissions.ts';
import {Alert} from 'react-native';
import {getPositionGPS} from '../utils/getPositionGPS.ts';
import {getWeatherData} from '../utils/getWeatherData.ts';
import {Locales} from '../constant/locales.ts';

export const useWeather = (
  setLoadingCounter: Dispatch<SetStateAction<number>>,
) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleToggle = async () => {
    if (isEnabled) {
      setIsEnabled(false);
      setWeather(null);
      setError(null);
      return;
    }
    const hasPermissions = await getPermissions();
    if (!hasPermissions) {
      Alert.alert(Locales.permissions.gpsDenied);
      return;
    }
    setLoading(true);
    if (setLoadingCounter) {
      setLoadingCounter(prev => prev + 1);
    }
    setError(null);
    try {
      const position = await getPositionGPS();
      const {latitude, longitude} = position;
      const weatherData = await getWeatherData(latitude, longitude);
      console.log(weatherData);
      if (!weatherData) {
        setError(Locales.error.weatherDataErr);
        setIsEnabled(false);
        return;
      }
      setWeather(weatherData);
      setIsEnabled(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(Locales.error.unknownErr);
      }
      setIsEnabled(false);
    } finally {
      setLoading(false);
      if (setLoadingCounter) {
        setLoadingCounter(prev => Math.max(prev - 1, 0));
      }
    }
  };

  return {
    weather,
    error,
    loading,
    isEnabled,
    handleToggle,
  };
};
