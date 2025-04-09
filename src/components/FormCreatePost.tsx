import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../common/colors.tsx';
import {BaseInput} from './BaseInput.tsx';

export const FormCreatePost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const formDate = [
    {
      value: postTitle,
      onChange: setPostTitle,
      placeholder: 'Title',
    },
    {
      value: postStatus,
      onChange: setPostStatus,
      placeholder: 'Published',
    },
    {
      value: postDescription,
      onChange: setPostDescription,
      placeholder: 'Description',
      styleExtension: styles.descriptionContainerHeight,
    },
  ];
  return (
    <View style={styles.containerFormPost}>
      {formDate.map(el => (
        <BaseInput
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
  containerFormPost: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  descriptionContainerHeight: {
    height: 150,
    textAlignVertical: 'top',
  },
});
