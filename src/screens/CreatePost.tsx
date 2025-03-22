import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';

export const CreatePostScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CreatePost</Text>
      <BaseNavigationButton label={'Return'} onPressHandler={() => navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
