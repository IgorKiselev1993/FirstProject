import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constant/colors.ts';
import {ImagePicker} from './component/ImagePicker.tsx';
import {FormInputPost} from './component/FormInputPost.tsx';
import {useForm} from '../../hook/useForm.ts';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const {values, setValues, image, setImage, isFormValid} = useForm();
  console.log('title:', values.title);
  console.log('status:', values.status);
  console.log('description:', values.description);
  console.log('image:', image);
  console.log('isFormValid:', isFormValid);
  return (
    <View style={styles.containerCreatePost}>
      <FormInputPost values={values} setValues={setValues} />
      <ImagePicker image={image} setImage={setImage} />
      <View style={styles.containerButton}>
        <NavigationButton
          label={'Submit'}
          disabled={!isFormValid}
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
