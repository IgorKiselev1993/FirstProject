import React from 'react';
import {Switch, Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {WeatherDataView} from './WeatherDataView.tsx';
import {WeatherData} from '../../../component/types/WeatherData.ts';

interface MeteorologyPostProps {
  isEnabled: boolean;
  handleToggle: () => void;
  weather: WeatherData | null;
  loading: boolean;
}

export const MeteorologyPost = ({
  isEnabled,
  handleToggle,
  loading,
  weather,
}: MeteorologyPostProps) => {
  return (
    <View style={styles.containerMeteorology}>
      <View style={styles.buttonWeather}>
        <Text style={styles.weatherForecast}>Опубликовать прогноз погоды</Text>
        {loading ? (
          <ActivityIndicator size={100} color={Colors.green} />
        ) : (
          <Switch
            value={isEnabled}
            onValueChange={handleToggle}
            thumbColor={Colors.whitesmoke}
            trackColor={{true: Colors.blue, false: Colors.gray}}
          />
        )}
      </View>
      <WeatherDataView weather={weather} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMeteorology: {
    marginBottom: 10,
  },
  buttonWeather: {
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherForecast: {
    fontSize: 18,
    color: Colors.blue,
  },
});
