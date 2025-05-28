import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigation/config/screens.ts';
import {NavigationProps} from '../../navigation/stack/root/RootStackContainer.tsx';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.containerMainScreen}>
      <View style={styles.introductoryText}>
        <Text style={styles.textStyle}>The list of posts is empty.</Text>
        <Text style={styles.textStyle}>Create a post</Text>
      </View>
      <View style={styles.containerButton}>
      <NavigationButton  label={'New Post'} onPress={() => navigation.navigate(Screens.createPost)}/>
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
  containerButton: {
    flex: 0.5,
    justifyContent: 'flex-end',
    bottom: 30,
  },
});
