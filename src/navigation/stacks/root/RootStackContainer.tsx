import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../../features/home/Home.tsx';
import {CreatePostScreen} from '../../../features/createPost/CreatePost.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {Screens} from '../../config/screens.ts';
import {IconHomeHeader} from '../../../components/icons/IconHomeScreen.tsx';
import {navigationRef} from '../../navigationServise.ts';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
        <NavigationContainer
        ref={navigationRef}
        onStateChange={()=> {
            const currentRoute = navigationRef.getCurrentRoute();
            if (currentRoute) {
                console.log(`[Navigation] moved to ${currentRoute.name}`);
                }
        }}>
          <Stack.Navigator
            initialRouteName={Screens.home}
            screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen
              name={Screens.home}
              component={HomeScreen}
              options={{headerTitle: IconHomeHeader}}
            />
            <Stack.Screen
              name={Screens.createPost}
              component={CreatePostScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
};
