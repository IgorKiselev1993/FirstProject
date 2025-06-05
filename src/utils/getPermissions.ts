import {Platform, Permission, PermissionsAndroid} from 'react-native';

export const getPermissions = () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      try {
        const camera = await requestPermissions(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          'FirstProject App Camera Permission',
          'FirstProject App needs access to your camera ' +
            'so you can take  pictures.',
        );
        console.log('camera');

        const granted = camera === PermissionsAndroid.RESULTS.GRANTED;

        if (granted) {
          resolve(true);
          console.log('granted');
        } else {
          resolve(false);
          console.log('denied');
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log(`Ошибка: ${err.message}`);
          reject(err);
        } else {
          console.log('Неизвестная ошибка');
          reject(new Error('Unknow Error'));
        }
      }
    } else {
      resolve(true);
    }
  });

const  requestPermissions = async (permission: Permission, title: string, message: string) => {
  console.log(`Request Permissions ${permission}`);
  return await PermissionsAndroid.request(permission, {
    title,
    message,
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
    buttonNeutral: 'Ask Me Never',
  });
};
