import React, {useCallback} from 'react';
import {View, Image, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {PermissionsMedia} from '../../../hooks/usePremissions.ts';
import {RemovePhotoButton} from '../../../components/ui/button/RemovePhotoButton.tsx';
import ImagePicker from 'react-native-image-crop-picker';
import {locales} from '../../../constant/locales.ts';

interface PhotoPickerProps {
  onPick: (imagePath: string) => void;
  onRemove: () => void;
  preview: string | null;
  setPreview: (imagePath: string | null) => void;
}

export const PhotoPicker = ({
  onPick,
  onRemove,
  preview,
  setPreview,
}: PhotoPickerProps) => {
  const openOptions = async () => {
    const hasPermission = await PermissionsMedia();
    if (!hasPermission) {
      Alert.alert(locales.alert.noPermissionTitle, locales.alert.noPermissionMessage);
      return;
    }

    Alert.alert(locales.alert.choosePhotoTitle, locales.alert.choosePhotoMessage, [
      {text: locales.buttons.camera, onPress: () => pickImage('camera')},
      {text: locales.buttons.gallery, onPress: () => pickImage('gallery')},
      {text: locales.buttons.cancel, style: 'cancel'},
    ]);
  };

  const pickImage = useCallback(
    async (source: 'camera' | 'gallery') => {
      try {
        const image =
          source === 'camera'
            ? await ImagePicker.openCamera({cropping: true, mediaType: 'photo'})
            : await ImagePicker.openPicker({
                cropping: true,
                mediaType: 'photo',
              });
        if (image.path !== preview) {
          setPreview(image.path);
          onPick(image.path);
        }
      } catch (err) {
        Alert.alert(`Ошибка ${source}:`);
      }
    },
    [preview, setPreview, onPick],
  );

  return (
    <View style={styles.containerPhoto}>
      <TouchableOpacity onPress={openOptions}>
        {preview ? (
          <Image source={{uri: preview}} style={styles.preview} />
        ) : (
          <Image
            source={require('../../../assets/icons/IconAddPhoto.png')}
            resizeMode="contain"
            accessibilityLabel="Добавить фото"
          />
        )}
      </TouchableOpacity>
      {preview && (
        <RemovePhotoButton
          onRemove={() => {
            setPreview(null);
            onRemove();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerPhoto: {
    position: 'absolute',
    left: 20,
    top: 50,
    borderRadius: 10,
  },
  preview: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
