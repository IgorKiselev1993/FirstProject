import {getPermissions} from './getPermissions.ts';
import {Alert} from 'react-native';
import {pickImageForm} from './pickImageForm.ts';

export const getPhotoPicker = (setImage: (image: string | null) => void) => {
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
      console.log('Изображение добавленно');
    } else {
      Alert.alert('Ошибка при выборе изображения');
    }
  };

  const removePhoto = () => {
    setImage(null);
    console.log('Изображение удалено');
  };

  return {pickImage, removePhoto};
};
