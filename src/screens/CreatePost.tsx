import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../common/colors.tsx';
import {FormCreatePost} from '../components/FormCreatePost.tsx';
import {AdditionImage} from '../components/IconAddPhoto.tsx';

export const CreatePostScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FormCreatePost />
      <View style={styles.containerImage}>
        <Text style={styles.textImage}>Photo</Text>
        <AdditionImage onPressHandler={() => undefined} />
      </View>
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
  containerImage: {
    height: '50%',
    backgroundColor: Colors.red,
  },
  textImage: {
    paddingLeft: 20,
    fontSize: 20,
    backgroundColor: Colors.green,
  },
});
