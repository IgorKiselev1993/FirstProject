import React from 'react';
import {TextInput, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface IBaseInputFormProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  styleExtension?: ViewStyle;
}

export const BaseInputForm = ({
  value,
  onChange,
  placeholder,
  styleExtension,
}: IBaseInputFormProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={Colors.black}
      style={StyleSheet.flatten([styles.defaultStyle, styleExtension])}
      multiline={true}
      numberOfLines={2}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    marginHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
    height: '20%',
    width: '90%',
    backgroundColor: Colors.whitesmoke,
    padding: 10,
  },
});
