import React from 'react';
import {TextInput, ViewStyle, StyleSheet} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface IBaseInputFormProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  styleExtension?: ViewStyle;
}

export const BaseInputForm = ({
  id,
  value,
  onChange,
  placeholder,
  styleExtension,
}: IBaseInputFormProps) => {
  return (
    <TextInput
      id={id}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={Colors.black}
      style={StyleSheet.flatten([styles.defaultStyle, styleExtension])}
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
    padding: 20,
  },
});
