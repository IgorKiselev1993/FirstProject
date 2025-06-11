import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {getPermissions} from '../../../utils/getPermissions.ts';
import {Colors} from '../../../constant/colors.ts';

export const PhotoPicker = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePick = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      Alert.alert('Нет разрешения');
      return;
    }
    const openImage = async (source: 'camera' | 'gallery') => {
      try {
        const image = await (source === 'camera'
          ? ImageCropPicker.openCamera({
              cropping: true,
              includeBase64: true,
              compressImageQuality: 0.8,
            })
          : ImageCropPicker.openPicker({
              cropping: true,
              includeBase64: true,
              compressImageQuality: 0.8,
            }));
        if ('data' in image && image.data) {
          setPhoto(`data:${image.mime};base64,${image.data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Ошибка при выборе фото');
      }
    };
    Alert.alert('Загрузить фото из:', '', [
      {text: 'Камера', onPress: () => openImage('camera')},
      {text: 'Галерея', onPress: () => openImage('gallery')},
      {text: 'Отмена', style: 'cancel'},
    ]);
  };

  return (
    <View style={styles.containerPhotoPicker}>
      <Text style={styles.textPhoto}>Photo</Text>
      <TouchableOpacity style={styles.addPhoto} onPress={handlePick}>
        {photo ? (
          <Image source={{uri: photo}}  style={styles.photo}/>
        ) : (
          <Image source={require('../../../assets/icons/AddPhoto.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPhotoPicker: {
    flex: 0.2,
    backgroundColor: Colors.white,
  },
  textPhoto: {
    margin: 20,
    fontSize: 18,
  },
  addPhoto: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 70,
    height: 70,
    backgroundColor: Colors.white,
  },
  photo: {
    borderRadius: 5,
    width: 70,
    height: 70,
  },
});
