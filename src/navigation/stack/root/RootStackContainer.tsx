import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {HomeScreen} from '../../../features/home/HomeScreen.tsx';
import {CreatePostScreen} from '../../../features/createPost/CreatePostScreen.tsx';
import {Screens} from '../../config/screens.ts';
import {LogotipIconHome} from '../../../component/icon/IconHomeHeader.tsx';

export type RootStackParamList = {
  [Screens.home]: undefined;
  [Screens.createPost]: undefined;
}

export type NavigationProps = NavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.home}
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name={Screens.home}
          component={HomeScreen}
          options={{headerTitle: LogotipIconHome}}
        />
        <Stack.Screen name={Screens.createPost} component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
