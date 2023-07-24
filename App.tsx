import React from 'react';
import type {PropsWithChildren} from 'react';
import Router from './src/routes/index';

//React Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
