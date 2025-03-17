import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../common/colors.tsx';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../navigation/config/screen.ts';

const NewPostButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate(Screens.createPost);
      }}>
      <Text style={styles.buttonText}>New Post</Text>
    </TouchableOpacity>
  );
};
export const HomeScreen = () => {
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
