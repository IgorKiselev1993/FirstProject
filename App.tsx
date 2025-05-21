import React from 'react';
import {RootStack} from './src/navigation/stacks/root/RootStackContainer.tsx';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <RootStack />
        </PersistGate>
      </Provider>
  );
}
