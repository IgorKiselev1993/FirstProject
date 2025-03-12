import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackContainer from './src/navigation/stacks/root/RootStackContainer.tsx';

export default function App() {
    return (
        <NavigationContainer>
            <RootStackContainer />
        </NavigationContainer>
    );
}
