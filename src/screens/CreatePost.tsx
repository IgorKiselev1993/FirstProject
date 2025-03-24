import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.emptyListLabelContainer}>
        <Text>CreatePost</Text>
      </View>
      <BaseNavigationButton
        label={'Return'}
        onPressHandler={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyListLabelContainer: {
    marginBottom: 300,
    alignItems: 'center',
  },
});
