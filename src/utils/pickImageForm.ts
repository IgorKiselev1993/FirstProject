import ImageCropPicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';

const formatImage = {
  cropping: true,
  includeBase64: true,
  compressImageQuality: 0.8,
};

type Source = 'camera' | 'gallery';

export const pickImageForm = async (source: Source): Promise<string | null> => {
  try {
    const image =
      source === 'camera'
        ? await ImageCropPicker.openCamera(formatImage)
        : await ImageCropPicker.openPicker(formatImage);
    if ('data' in image && image.data) {
      return `data:${image.mime};base64,${image.data}`;
    }
    return null;
  } catch (error) {
    console.log(error);
    Alert.alert('Ошибка при выборе фото');
    return null;
  }
};
