import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

interface AdditionImageProps {
  onPressHandler: () => undefined;
}

export const AdditionImage = (props: AdditionImageProps) => {
  const {onPressHandler} = props;
  return (
    <TouchableOpacity
      onPress={onPressHandler}>
      <Image
          source={require('../assets/IconAddPhoto.png')}
          style={styles.iconPhoto}
          resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconPhoto: {
    position: 'absolute',
    left: 20,
    marginTop: 10,
    borderRadius: 10,
  },
});
