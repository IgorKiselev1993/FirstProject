import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export const FormInputPost = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Published');
  const [description, setDescription] = useState('');

  /*const dataFormInputPost = [
    {
      id: title,
      value: title,
      onChange: () => setTitle,
      placeholder: 'Title',
    },
    {
      id: status,
      value: status,
      onChange: () => setStatus,
      placeholder: 'Published',
    },
    {
      id: description,
      value: description,
      onChange: () => setDescription,
      placeholder: 'Description',
    },
  ];*/
  return (
    <View style={styles.containerDataInput}>
      <TextInput value={title} onChangeText={setTitle} placeholder={'Title'} />
      <TextInput
        value={status}
        onChangeText={setStatus}
        placeholder={'Status'}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder={'Description'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerDataInput: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 5,
  },
});
