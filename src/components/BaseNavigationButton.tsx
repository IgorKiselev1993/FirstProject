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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gold,
  },
  buttonText: {
    color: Colors.green,
    fontSize: 25,
  },
});
