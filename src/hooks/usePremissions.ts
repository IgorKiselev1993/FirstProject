import {PermissionsAndroid, Platform} from 'react-native';

export const PermissionsMedia = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const sdk = Platform.Version;
      const permissions =
        sdk >= 33
          ? [
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
              PermissionsAndroid.PERMISSIONS.CAMERA,
            ]
          : [];

      const granted = await PermissionsAndroid.requestMultiple(permissions);
      return Object.values(granted).every(
        permission => permission === PermissionsAndroid.RESULTS.GRANTED,
      );
    } catch (err) {
      console.warn('Ошибка разрешений:', err);
      return false;
    }
  }
  return true;
};
