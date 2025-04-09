import React from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import {Colors} from '../common/colors.tsx';

interface IBaseInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  styleExtension: ViewStyle | undefined;
}

export const BaseInput = (props: IBaseInputProps) => {
  const {value, onChange, placeholder, styleExtension} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
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
    borderRadius: 5,
    height: 70,
    fontSize: 20,
    backgroundColor: Colors.bluewhite,
  },
});
