import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface NavigationButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  styleStates?: ViewStyle;
}

export const NavigationButton = ({
  label,
  onPress,
  disabled,
  styleStates,
}: NavigationButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={StyleSheet.flatten([
        styles.defaultStyle,
        disabled ? styleStates : styles.defaultStyle,
      ])}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.blue,
  },
  textButton: {
    fontSize: 20,
    alignSelf: 'center',
    color: Colors.white,
  },
});
