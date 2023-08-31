import React from 'react';
import type {PropsWithChildren} from 'react';
import Router from './src/routes/index';

//React Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

import {NotificationProvider} from './src/contextApi/ApiContext';

import Loader from './src/screens/NetworkActivity/NetworkActivity';
import OnError from './src/screens/NetworkActivity/OnError';
import Toaster from './src/screens/NetworkActivity/Toaster';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NotificationProvider>
          <Toaster />
          <Loader />
          <Router />
        </NotificationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
