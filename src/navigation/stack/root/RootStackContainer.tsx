import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../../features/home/HomeScreen.tsx';
import {CreatePostScreen} from '../../../features/createPost/CreatePostScreen.tsx';
import {screens} from '../../config/Screens.ts';
import {LogotipIconHome} from '../../../component/icon/IconHomeHeader.tsx';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screens.home}
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name={screens.home}
          component={HomeScreen}
          options={{headerTitle: LogotipIconHome}}
        />
        <Stack.Screen name={screens.createPost} component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
