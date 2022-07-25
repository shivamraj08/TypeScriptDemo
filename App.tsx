import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/redux/store';
import NavigationScreen from './src/routes';

export default function App(props:any) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationScreen/>
      </PersistGate>
    </Provider>
  )
}
