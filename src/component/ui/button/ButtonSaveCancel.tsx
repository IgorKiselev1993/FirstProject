import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant/colors.ts';

interface ButtonSaveCancelProps {
  onPress: () => void;
  label: string;
  styleSave?: ViewStyle;
}

export const ButtonSaveCancel = ({onPress, label, styleSave}: ButtonSaveCancelProps) => {
  return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.defaultButton, styleSave]}>{label}</Text>
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
});
