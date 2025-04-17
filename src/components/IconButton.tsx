import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface AdditionImageProps {
  onPressHandler: () => void;
}

export const AdditionImage = (props: AdditionImageProps) => {
  const {onPressHandler} = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPressHandler}></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
});
