import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {RemoveButton} from '../../../component/ui/button/RemoveButton.tsx';
import {getPhotoPicker} from '../../../utils/imageUtils/getPhotoPicker.ts';

interface ImagePickerProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

export const ImagePicker = ({image, setImage}: ImagePickerProps) => {
  const {pickImage, removePhoto} = getPhotoPicker(setImage);

  return (
    <View style={styles.containerPhotoPicker}>
      <Text style={styles.textPhoto}>Photo</Text>
      <View style={styles.photoWrap}>
        {image && <RemoveButton onRemove={removePhoto} label={'X'} />}
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.image}
            source={
              image
                ? {uri: image}
                : require('../../../assets/icons/AddPhoto.png')
            }
          />
        </TouchableOpacity>
      </View>
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
  photoWrap: {
    position: 'relative',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 70,
    height: 70,
    backgroundColor: Colors.white,
  },
  image: {
    borderRadius: 5,
    width: 70,
    height: 70,
  },
});
