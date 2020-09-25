/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '../DemoRedux/src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React ,{Component} from 'react';
import { createStore } from 'redux';

const defaultState = {value: 0};

const reducer = (state = defaultState, action) => {
  if (action.type == 'UP') {
    return {value: state.value + 1};
  }
  if (action.type == 'DOWN') {
    return {value: state.value - 1};
  }
  return state;
};

const store = createStore(reducer);

export default class DemoRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => DemoRedux);
