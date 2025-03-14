import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../common/colors.tsx';
import {useNavigation} from '@react-navigation/native';

const NewPostButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('CreatePost')}>
      <Text style={styles.buttonText}>New Post</Text>
    </TouchableOpacity>
  );
};
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>The list of posts is currently empty.</Text>
      <Text>Create a post</Text>
      <NewPostButton />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    color: Colors.green,
    fontSize: 16,
  },
});
export {HomeScreen};
