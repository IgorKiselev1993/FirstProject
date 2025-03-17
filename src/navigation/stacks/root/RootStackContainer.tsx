import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../../screens/Home.tsx';
import {CreatePostScreen} from '../../../screens/CreatePost.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {Screens} from '../../config/screen.ts';

const Stack = createNativeStackNavigator();
export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={Screens.home} component={HomeScreen} />
        <Stack.Screen name={Screens.createPost} component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
