import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../common/colors.tsx';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postTitle, setPostTitle] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postPhoto, setPostPhoto] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.containerFormPost}>
        <TextInput
          style={{
            marginLeft: 15,
            marginRight: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: Colors.bluewhite,
          }}
          value={postTitle}
          onChangeText={setPostTitle}
          placeholder={'Title'}
          placeholderTextColor={Colors.black}
        />
        <TextInput
          style={{
            marginLeft: 15,
            marginRight: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            backgroundColor: Colors.bluewhite,
          }}
          value={postStatus}
          onChangeText={setPostStatus}
          placeholder={'Published'}
          placeholderTextColor={Colors.black}
        />
        <TextInput
          style={{
            marginLeft: 15,
            marginRight: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            height: 100,
            backgroundColor: Colors.bluewhite,
          }}
          textAlignVertical={'top'}
          value={postDescription}
          onChangeText={setPostDescription}
          placeholder={'Description'}
          placeholderTextColor={Colors.black}
        />
      </View>
      <TextInput
        textAlignVertical={'top'}
        style={styles.containerImage}
        value={postPhoto}
        onChangeText={setPostPhoto}
        placeholder={'Photo'}
        placeholderTextColor={Colors.black}
        editable={false}
      />
      <View style={styles.emptyListLabelContainer}>
        <Text>CreatePost</Text>
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
  emptyListLabelContainer: {
    marginBottom: 300,
    alignItems: 'center',
  },
  containerFormPost: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 15,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  containerImage: {
    flex: 0.5,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: Colors.white,
  },
});
