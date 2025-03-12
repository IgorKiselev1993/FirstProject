import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {autoBatchEnhancer} from "@reduxjs/toolkit";

const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text>The list of posts is currently empty.{'\n'} Create a post</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CreatePost')}>
              <Text style={styles.buttonText}>New Post</Text>
          </TouchableOpacity>
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
            backgroundColor: 'red',
            borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
            fontSize: 16,
    },
});

export default HomeScreen;
