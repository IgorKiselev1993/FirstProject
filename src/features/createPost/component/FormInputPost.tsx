import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {BaseInputForm} from '../../../component/ui/input/BaseInputForm.tsx';

export const FormInputPost = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Published');
  const [description, setDescription] = useState('');
  const dataFormInputPost = [
    {
      value: title,
      onChange: setTitle,
      placeholder: 'Title',
    },
    {
      value: status,
      onChange: setStatus,
      placeholder: 'Published',
    },
    {
      value: description,
      onChange: setDescription,
      placeholder: 'Description',
      styleExtension: styles.descriptionInput,
    },
  ];
  return (
    <View style={styles.containerDataInput}>
      {dataFormInputPost.map((el, index) => (
        <BaseInputForm
          key={index}
          value={el.value}
          onChange={el.onChange}
          placeholder={el.placeholder}
          styleExtension={el.styleExtension}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  containerDataInput: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  descriptionInput: {
    height: '40%',
    textAlignVertical: 'top',
  },
});
