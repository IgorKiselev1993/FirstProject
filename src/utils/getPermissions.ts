import {Alert, Permission, PermissionsAndroid, Platform} from 'react-native';

export const getPermissions = () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      try {
        const camera = await requestPermission(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          'FirstProject App Camera Permission',
          'FirstProject App needs access to your camera ' +
            'so you can take  pictures.',
        );

        const sendSms = await requestPermission(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          'FirstProject App SEND_SMS',
          'FirstProject App needs access to your SEND_SMS',
        );

        const granted =
          camera === PermissionsAndroid.RESULTS.GRANTED &&
          sendSms === PermissionsAndroid.RESULTS.GRANTED;

        if (granted) {
          Alert.alert('Доступ получен');
          resolve(true);
        } else {
          Alert.alert('Отказано в доступе');
          resolve(false);
        }
      } catch (err) {
        Alert.alert('Ошибка');
        reject(err);
      }
    } else {
      resolve(true);
    }
  });

const requestPermission = async (
  permission: Permission,
  title: string,
  message: string,
) => {
  console.info('Requesting permission for:', permission);
  return await PermissionsAndroid.request(permission, {
    title,
    message,
    buttonPositive: 'OK',
    buttonNegative: 'Cancel',
    buttonNeutral: 'Ask Me Later',
  });
};
