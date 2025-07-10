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
          <View style={styles.iconTemp}>
            <Image
              style={styles.icon}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
              }}
            />
            <Text style={styles.temperature}>
              {Math.round(weather.temperature)}°C
            </Text>
          </View>
          <Text style={styles.description}>
            {weather.description.charAt(0).toUpperCase() +
              weather.description.slice(1)}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
