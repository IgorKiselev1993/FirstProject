import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../common/colors.tsx';
import {FormCreatePost} from '../components/FormCreatePost.tsx';

export const CreatePostScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FormCreatePost />
      <Text style={styles.textImage}>Photo</Text>
      <TouchableOpacity style={styles.buttonImage}></TouchableOpacity>
      <BaseNavigationButton
        label={'Sumbit'}
        onPressHandler={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.bluewhite,
  },
  buttonImage: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  textImage: {
    paddingLeft: 20,
    fontSize: 20,
  },
});
