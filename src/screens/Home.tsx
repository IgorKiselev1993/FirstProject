import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseNavigationButton} from '../components/BaseNavigationButton.tsx';
import {Screens} from '../navigation/config/screen.ts';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigation/stacks/root/RootStackContainer.tsx';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text>The list of posts is currently empty.</Text>
        <Text>Create a post</Text>
      </View>
      <BaseNavigationButton
        label={'New Post'}
        onPressHandler={() => navigation.navigate(Screens.createPost)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelContainer: {
    marginBottom: 300,
    alignItems: 'center',
  },
});
