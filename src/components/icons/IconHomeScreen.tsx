import {Image, StyleSheet} from 'react-native';
import React from 'react';

export const renderHomeHeader = () => {
  return (
    <Image
      source={require('../../assets/icons/LogotipHomeScreen.png')}
      style={styles.headerTitle}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    width: 30,
    height: 30,
  },
});
