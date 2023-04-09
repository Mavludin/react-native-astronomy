/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import App from './src/App';
import {store} from './src/store';

const RNRedux = () => () =>
  (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, RNRedux);
