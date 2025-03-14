import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../../screens/Home.tsx';
import {CreatePostScreen} from '../../../screens/CreatePost.tsx';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
