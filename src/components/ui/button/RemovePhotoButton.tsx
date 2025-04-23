import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constant/colors.tsx';

interface RemovePhotoButtonProps {
  onRemove: () => void;
}

export const RemovePhotoButton = ({onRemove}: RemovePhotoButtonProps) => {
  return (
    <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
      <Text style={styles.removeText}>×</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  removeBtn: {
    position: 'absolute',
    right: 1,
    top: 1,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    backgroundColor: Colors.blue,
  },
  removeText: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});
