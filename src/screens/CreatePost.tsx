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
      <View style={styles.formContainer}>
        <FormCreatePost />
      </View>
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
    backgroundColor: Colors.bluewhite,
  },
  formContainer: {
    flex: 0.5,
  },
  containerImage: {
    flex: 0.2,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  textImage: {
    top: 10,
    paddingLeft: 20,
    fontSize: 18,
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 0.3,
  },
});
