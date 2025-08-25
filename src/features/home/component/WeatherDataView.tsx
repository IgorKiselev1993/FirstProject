import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {WeatherData} from '../../../component/types/WeatherData.ts';
import {Colors} from '../../../constant/colors.ts';

type WeatherDataProps = {
  weather: WeatherData | null;
};

export const WeatherDataView = ({weather}: WeatherDataProps) => {
  return (
    <>
      {weather && (
        <View style={styles.containerWeather}>
          <Text style={styles.city}>{weather.city}</Text>
          <Text
            style={[
              styles.temperature,
              {color: weather.temperature > 0 ? Colors.red : Colors.blue},
            ]}>
            {Math.round(weather.temperature)}°C
          </Text>
          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
              }}
            />
            <Text style={styles.description}>
              {weather.description.charAt(0).toUpperCase() +
                weather.description.slice(1)}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerWeather: {
    alignItems: 'center',
    borderRadius: 12,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: Colors.white1,
    marginTop: 20,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    justifyContent: 'center',
  },
});
