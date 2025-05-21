import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BaseNavigationButton} from '../../components/ui/button/BaseNavigationButton.tsx';
import {Colors} from '../../constant/colors.tsx';
import {FormCreatePost} from './components/FormCreatePost.tsx';
import {PhotoPicker} from './components/PhotoPicker.tsx';
import {useDispatch} from 'react-redux';
import {addPost} from '../../redux/features/post/postSlice.ts';
import {Post} from '../../types.ts';
import {navigate} from '../../navigation/navigationServise.ts';
import {Screens} from '../../navigation/config/screens.ts';

export const CreatePostScreen = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postStatus, setPostStatus] = useState('Published');
  const [postDescription, setPostDescription] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const isFormValid =
    postTitle.trim().length > 0 &&
    postDescription.trim().length > 0 &&
    preview &&
    preview.trim().length > 0;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newPost: Post = {
      id: new Date().toISOString(),
      title: postTitle,
      description: postDescription,
      status: postStatus,
      createdAt: new Date().toISOString(),
      image: preview!,
    };
    dispatch(addPost(newPost));
    navigate(Screens.home);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <FormCreatePost
          postTitle={postTitle}
          postStatus={postStatus}
          postDescription={postDescription}
          setPostTitle={setPostTitle}
          setPostStatus={setPostStatus}
          setPostDescription={setPostDescription}
        />
      </View>
      <View style={styles.containerImage}>
        <Text style={styles.textImage}>Photo</Text>
        <PhotoPicker
          onPick={imagePath => setPreview(imagePath)}
          onRemove={() => setPreview(null)}
          preview={preview}
          setPreview={setPreview}
        />
      </View>
      <BaseNavigationButton
        label={'Submit'}
        disabled={!isFormValid}
        styleButton={styles.disableButton}
        onPressHandler={handleSubmit}
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
  disableButton: {
    backgroundColor: Colors.grey,
  },
});
