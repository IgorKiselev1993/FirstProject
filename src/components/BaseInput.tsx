import React from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';

interface BaseInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  styleExtension: ViewStyle | ViewStyle[];
}

export const BaseInput = (props: BaseInputProps) => {
  const {value, onChange, placeholder, styleExtension} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={StyleSheet.flatten([
          styleExtension,
      ])}
    />
  );
};

