import Geolocation from '@react-native-community/geolocation';
import {Locales} from '../constant/locales.ts';

export const getPositionGPS = async (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude});
        console.log(latitude, longitude);
      },
      error => {
        console.log(Locales.error.geolocationErr, error.message);
        reject(error);
      },
      {
        timeout: 20000,
        maximumAge: 30000,
      },
    );
  });
};
