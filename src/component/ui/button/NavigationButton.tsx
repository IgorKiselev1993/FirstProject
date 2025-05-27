import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface NavigationButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const NavigationButton = ({
  label,
  onPress,
  disabled,
  style,
}: NavigationButtonProps) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        !disabled ? styles.defaultStyle : style,
      ])}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    left: 10,
    right: 10,
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
