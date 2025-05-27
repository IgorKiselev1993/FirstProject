import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.containerMainScreen}>
      <View style={styles.introductoryText}>
        <Text style={styles.textStyle}>The list of posts is empty.</Text>
        <Text style={styles.textStyle}>Create a post</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainScreen: {
    flex: 1,
  },
  introductoryText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
  },
});
