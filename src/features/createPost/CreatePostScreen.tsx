import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constant/colors.ts';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerCreatePost}>
      <View style={styles.containerDataInput}></View>
      <View style={styles.containerPhotoPicker}>
        <Text style={styles.textPhoto}>Photo</Text>
        <TouchableOpacity style={styles.addPhoto}>
          <Image source={require('../../assets/icons/AddPhoto.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <NavigationButton
          label={'Submit'}
          disabled={true}
          onPress={() => navigation.goBack()}
          styleStates={styles.disabledButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCreatePost: {
    flex: 1,
    backgroundColor: Colors.whitesmoke,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 30,
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  containerDataInput: {
    flex: 1,
  },
  containerPhotoPicker: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  textPhoto: {
    margin: 20,
    fontSize: 18,
  },
  addPhoto: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 70,
    height: 70,
    backgroundColor: Colors.white,
  },
});
