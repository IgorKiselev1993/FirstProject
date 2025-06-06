import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationProp,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {HomeScreen} from '../../../features/home/HomeScreen.tsx';
import {CreatePostScreen} from '../../../features/createPost/CreatePostScreen.tsx';
import {Screens} from '../../config/screens.ts';
import {IconLogoHome} from '../../../component/icon/IconLogoHome.tsx';
import {useLogger} from '@react-navigation/devtools';

type RootStackParamList = {
  [Screens.home]: undefined;
  [Screens.createPost]: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  useLogger(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Screens.home}
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name={Screens.home}
          component={HomeScreen}
          options={{headerTitle: IconLogoHome}}
        />
        <Stack.Screen name={Screens.createPost} component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
