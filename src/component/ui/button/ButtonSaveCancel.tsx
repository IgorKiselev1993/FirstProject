import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant/colors.ts';

interface ButtonSaveCancelProps {
  onPress: () => void;
  label: string;
  styleSave?: ViewStyle;
  disabled?: boolean;
}

export const ButtonSaveCancel = ({onPress, label, styleSave, disabled}: ButtonSaveCancelProps) => {
  return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={[styles.defaultButton, disabled ? styles.disabledButton : styleSave]}>{label}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
      fontSize: 14,
      borderRadius: 10,
      padding: 10,
      color: Colors.white,
      backgroundColor: Colors.red,
  },
    disabledButton: {
      backgroundColor: Colors.gray,
    },
});
