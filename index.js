/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './store';
import {Provider} from 'react-redux';
import React from 'react';

const RNRedux = () => () =>
  (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, RNRedux);
