import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BaseNavigationButton} from '../../../components/ui/button/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constant/colors.tsx';
import {FormCreatePost} from '../components/FormCreatePost.tsx';
import {PhotoPicker} from '../components/PhotoPicker.tsx';

export const CreatePostScreen = () => {
  const navigation = useNavigation();

   const [preview, setPreview] = React.useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <FormCreatePost />
      </View>
      <View style={styles.containerImage}>
        <Text style={styles.textImage}>Photo</Text>
        <PhotoPicker onPick={imagePath => setPreview(imagePath)} />
      </View>
      <BaseNavigationButton
        label={'Sumbit'}
        onPressHandler={() => {
          console.log('Отправка фото:', preview);
          navigation.goBack();
        }}
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
});
