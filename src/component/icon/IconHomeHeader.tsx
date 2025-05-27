import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const LogotipIconHome = () => {
  return (
    <Image
      source={require('../../assets/icons/LogotipHome.png')}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
  },
});
