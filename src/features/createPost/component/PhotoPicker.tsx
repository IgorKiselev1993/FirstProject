import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {usePhotoPicker} from '../../../hook/usePhotoPicker.ts';
import {RemoveButton} from '../../../component/ui/button/RemoveButton.tsx';

export const PhotoPicker = () => {
  const {photo, pickImage, removePhoto} = usePhotoPicker();

  return (
    <View style={styles.containerPhotoPicker}>
      <Text style={styles.textPhoto}>Photo</Text>
      <View style={styles.photoWrap}>
        {photo && <RemoveButton onRemove={removePhoto} />}
        <TouchableOpacity onPress={pickImage}>
          {photo ? (
            <Image source={{uri: photo}} style={styles.photo} />
          ) : (
            <Image source={require('../../../assets/icons/AddPhoto.png')} />
          )}
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
  photo: {
    borderRadius: 5,
    width: 70,
    height: 70,
  },
});
