import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constant/colors.ts';
import {ImagePicker} from './component/ImagePicker.tsx';
import {FormInputPost} from './component/FormInputPost.tsx';
import {useForm} from '../../hook/useForm.ts';
import {Post} from '../../component/types/Post.ts';
import {useAppDispatch} from '../../hook/hooksStore.ts';
import {addPost} from '../../entities/postSlice.ts';
import {Locales} from '../../constant/locales.ts';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const {values, setValues, image, setImage, isFormValid} = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (isFormValid) {
     const newPost: Post = {
       id: Date.now().toString(),
       created_at: new Date().toISOString(),
       image: image ?? require('../../assets/icons/DefaultImage.jpg'),
       title: values.title,
       status: values.status,
       description: values.description,
     };
     dispatch(addPost(newPost));
     navigation.goBack();
    }
  };

  return (
    <View style={styles.containerCreatePost}>
      <FormInputPost values={values} setValues={setValues} />
      <ImagePicker image={image} setImage={setImage} />
      <View style={styles.containerButton}>
        <NavigationButton
          label={Locales.createPost.sendingButton}
          disabled={!isFormValid}
          onPress={handleSubmit}
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
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
});
