import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../../screens/Home/Home.tsx';
import {CreatePostScreen} from '../../../features/createPost/screens/CreatePost.tsx';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {Screens} from '../../config/screen.ts';
import {renderHomeHeader} from '../../../components/icons/IconHomeScreen.tsx';
import {Provider} from 'react-redux';
import {store, persistor} from '../../../redux/store.ts';
import {PersistGate} from 'redux-persist/integration/react';

export type RootStackParamsList = {
  [Screens.home]: undefined;
  [Screens.createPost]: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamsList>;

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Screens.home}
            screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen
              name={Screens.home}
              component={HomeScreen}
              options={{headerTitle: renderHomeHeader}}
            />
            <Stack.Screen
              name={Screens.createPost}
              component={CreatePostScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
