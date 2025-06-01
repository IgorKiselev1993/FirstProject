import React from 'react';
import {RootStack} from './src/navigation/stack/root/RootStackContainer.tsx';
import { persistor, store} from './src/store/store.ts';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <RootStack />
        </PersistGate>
      </Provider>
  );
}
