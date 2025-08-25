import {useCallback, useEffect, useState} from 'react';
import {getPermissions} from '../utils/getPermissions.ts';
import {Alert} from 'react-native';
import {getPositionGPS} from '../utils/getPositionGPS.ts';
import {Locales} from '../constant/locales.ts';
import {useAppDispatch} from './hooksStore.ts';
import {getWeather} from '../store/weather/thunkWeather.ts';
import {
  clearError,
  clearWeather,
  selectWeatherByPost,
} from '../store/entities/weatherSlice.ts';
import {useSelector} from 'react-redux';

export const useWeatherToggle = (postId: string) => {
  const dispatch = useAppDispatch();
  const {weather, loading, error} = useSelector(selectWeatherByPost(postId));
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = useCallback(async () => {
    if (isEnabled) {
      setIsEnabled(false);
      dispatch(clearWeather(postId));
      return;
    }

    const hasPermissions = await getPermissions();
    if (!hasPermissions) {
      Alert.alert(Locales.permissions.gpsDenied);
      return;
    }
    try {
      const {latitude, longitude} = await getPositionGPS();
      setIsEnabled(true);
      await dispatch(getWeather({postId, latitude, longitude})).unwrap();
    } catch {
      setIsEnabled(false);
    }
  }, [isEnabled, dispatch, postId]);

  useEffect(() => {
    if (!error) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(clearError(postId));
    }, 10000);
    return () => clearTimeout(timer);
  }, [error, dispatch, postId]);

  return {
    weather,
    error,
    loading,
    isEnabled,
    handleToggle,
  };
};
