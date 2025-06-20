import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface RemoveButtonProps {
  onRemove: () => void;
  label?: string;
}

export const RemoveButton = ({onRemove, label}: RemoveButtonProps) => {
  return (
    <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
  },
});
