import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const EmptyHomeScreen = () => {
  return (
    <View style={styles.introductoryText}>
      <Text style={styles.textStyle}>The list of posts is empty.</Text>
      <Text style={styles.textStyle}>Create a post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  introductoryText: {
    marginTop: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
  },
});
