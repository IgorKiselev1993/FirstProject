import {Platform, Permission, PermissionsAndroid} from 'react-native';
import {Locales} from '../constant/locales.ts';

export const getPermissions = async () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      try {
        const camera = await requestPermissions(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          Locales.permissions.titleCamera,
          Locales.permissions.messageCamera,
        );
        console.log(Locales.common.camera);

        const gps = await requestPermissions(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          Locales.permissions.titleGps,
          Locales.permissions.messageGps,
        );
        console.log('gps');

        const granted = camera === PermissionsAndroid.RESULTS.GRANTED &&
            gps === PermissionsAndroid.RESULTS.GRANTED;

        if (granted) {
          console.log(Locales.common.granted);
          resolve(true);
        } else {
          console.log(Locales.common.denied);
          resolve(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log(`Ошибка: ${err.message}`);
          reject(err);
        } else {
          console.log(Locales.error.unknownErr);
          reject(new Error(Locales.error.unknownErr));
        }
      }
    } else {
      resolve(true);
    }
  });

const requestPermissions = async (
  permission: Permission,
  title: string,
  message: string,
) => {
  console.log(`Request Permissions ${permission}`);
  return await PermissionsAndroid.request(permission, {
    title,
    message,
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
    buttonNeutral: 'Ask Me Never',
  });
};
