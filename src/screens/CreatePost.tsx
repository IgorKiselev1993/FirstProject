import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../common/colors.tsx';
import {useNavigation} from '@react-navigation/native';

const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Return</Text>
    </TouchableOpacity>
  );
};

export const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePost</Text>
      <ReturnButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.black,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.red,
    fontSize: 16,
  },
});
