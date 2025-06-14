import {useState} from 'react';
import {getPermissions} from '../utils/getPermissions.ts';
import {Alert} from 'react-native';
import {pickImageForm} from '../utils/pickImageForm.ts';

export const usePhotoPicker = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      Alert.alert('Нет разрешения');
      return;
    }
    Alert.alert('Загрузить фото из:', '', [
      {text: 'Камера', onPress: () => handlePick('camera')},
      {text: 'Галерея', onPress: () => handlePick('gallery')},
      {text: 'Отмена', style: 'cancel'},
    ]);
  };

  const handlePick = async (source: 'camera' | 'gallery') => {
    const base64Image = await pickImageForm(source);
    if (base64Image) {
      setImage(base64Image);
    } else {
      Alert.alert('Ошибка при выборе фото');
    }
  };
  const removePhoto = () => {
    setImage(null);
  };
  return {image, pickImage, removePhoto};
};
