import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/Home.tsx';
import CreatePost from '../../../screens/CreatePost.tsx';


const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="CreatePost" component={CreatePost}/>
        </Stack.Navigator>
    );
};

export default RootStack;
