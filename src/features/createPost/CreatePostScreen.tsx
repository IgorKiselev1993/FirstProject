import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const CreatePostScreen = () => {
  return (
      <View style={styles.containerCreatePost}>
        <Text>Hello</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  containerCreatePost: {
    flex: 1,
  },
});
