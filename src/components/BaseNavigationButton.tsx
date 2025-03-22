import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../common/colors.tsx';

interface BaseNavButtonProps {
  label: string;
  onPressHandler: () => void;
}

export const BaseNavigationButton = (props: BaseNavButtonProps) => {
  const {label, onPressHandler} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal:130,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
  },
});
