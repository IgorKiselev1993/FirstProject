import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';

export const CreatePostScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.containerCreatePost}>
        <Text>Hello</Text>
          <View style={styles.containerButton}>
          <NavigationButton label={'Submit'} onPress={()=> navigation.goBack()} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  containerCreatePost: {
    flex: 1,
  },
    containerButton: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 30,
    },
});
