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
        <Text style={styles.weatherForecast}>Прогноз погоды</Text>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.green} />
        ) : (
          <Switch
            value={isEnabled}
            onValueChange={handleToggle}
            thumbColor={Colors.whitesmoke}
            trackColor={{true: Colors.yellow, false: Colors.red}}
          />
        )}
      </View>
      <WeatherDataView weather={weather} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMeteorology: {
    flex: 1,
  },
  buttonWeather: {
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherForecast: {
    fontSize: 22,
    color: Colors.slategray,
  },
  containerWeather: {
    top: 10,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: Colors.yellow,
    padding: 10,
  },
  city: {
    fontSize: 30,
  },
  iconTemp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  temperature: {
    fontSize: 20,
  },
  description: {
    fontSize: 20,
    justifyContent: 'center',
  },
});
