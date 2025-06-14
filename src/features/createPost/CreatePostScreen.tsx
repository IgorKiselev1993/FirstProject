import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constant/colors.ts';
import {PhotoPicker} from './component/PhotoPicker.tsx';
import {FormInputPost} from './component/FormInputPost.tsx';

export const CreatePostScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerCreatePost}>
      <FormInputPost />
      <PhotoPicker />
      <View style={styles.containerButton}>
        <NavigationButton
          label={'Submit'}
          disabled={true}
          onPress={() => navigation.goBack()}
          styleStates={styles.disabledButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCreatePost: {
    flex: 1,
    backgroundColor: Colors.whitesmoke,
  },
  containerButton: {
    flex: 0.4,
    justifyContent: 'flex-end',
    bottom: 30,
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
});
