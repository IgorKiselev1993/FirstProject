import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface RemoveButtonProps {
  onRemove: () => void;
}

export const RemoveButton = ({onRemove}: RemoveButtonProps) => {
  return (
    <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
      <Text style={styles.buttonText}>X</Text>
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
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
  },
});
