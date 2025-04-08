import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../common/colors.tsx';
import {BaseInput} from './BaseInput.tsx';

export const FormCreatePost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const formPost = [
    {
      value: postTitle,
      onChange: setPostTitle,
      placeholder: 'Title',
      styleExtension: [styles.styleExtension],
    },
    {
      value: postStatus,
      onChange: setPostStatus,
      placeholder: 'Published',
      styleExtension: [styles.styleExtension],
    },
    {
      value: postDescription,
      onChange: setPostDescription,
      placeholder: 'Description',
      styleExtension: [styles.styleExtension,styles.descriptionContainerHeight],
    },
  ];
  return (
    <View style={styles.containerFormPost}>
      {formPost.map(el => (
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
  styleExtension: {
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 70,
    fontSize: 20,
    backgroundColor: Colors.bluewhite,
  },
  descriptionContainerHeight: {
    height: 150,
    textAlignVertical: 'top',
  },
});
