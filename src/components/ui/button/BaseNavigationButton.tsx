import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.tsx';

interface BaseNavButtonProps {
  label: string;
  onPressHandler: () => void;
  disabled: boolean;
  styleButton: ViewStyle;
}

export const BaseNavigationButton = (props: BaseNavButtonProps) => {
  const {label, onPressHandler, disabled, styleButton} = props;

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.defaultStyleButton,
        disabled ? styleButton : styles.defaultStyleButton])}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyleButton: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 50,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
  },
});
