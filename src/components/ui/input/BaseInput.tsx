import React from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.tsx';

interface BaseInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  styleExtension: ViewStyle | undefined;
}

export const BaseInput = ({value, onChange, placeholder, styleExtension}: BaseInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      multiline={placeholder === 'Description'}
      placeholderTextColor={Colors.black}
      style={StyleSheet.flatten([styles.containerDefaultStyle, styleExtension])}
    />
  );
};

const styles = StyleSheet.create({
  containerDefaultStyle: {
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 70,
    fontSize: 20,
    backgroundColor: Colors.bluewhite,
  },
});
