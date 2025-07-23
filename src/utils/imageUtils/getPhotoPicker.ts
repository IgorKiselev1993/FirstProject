import {getPermissions} from '../getPermissions.ts';
import {Alert} from 'react-native';
import {pickImageForm} from './pickImageForm.ts';
import {Locales} from '../../constant/locales.ts';

export const getPhotoPicker = (setImage: (image: string | null) => void) => {
  const pickImage = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      Alert.alert('Нет разрешения');
      return;
    }
    Alert.alert(Locales.photoPicker.loadingPhoto, '', [
      {text: Locales.common.camera, onPress: () => handlePick('camera')},
      {text: Locales.common.gallery, onPress: () => handlePick('gallery')},
      {text: Locales.common.cancelButton, style: 'cancel'},
    ]);
  };

  const handlePick = async (source: 'camera' | 'gallery') => {
    const base64Image = await pickImageForm(source);
    if (base64Image) {
      setImage(base64Image);
      console.log(Locales.photoPicker.imageAdded);
    } else {
      Alert.alert(Locales.error.imageErr);
    }
  };

  const removePhoto = () => {
    setImage(null);
    console.log(Locales.photoPicker.imageDelete);
  };

  return {pickImage, removePhoto};
};
