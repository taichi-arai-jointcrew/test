/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from 'react-redux';

import CommonStyles from "./common/commonStyles";
import Store from "./Store";

type Props = {};
type State = {};

// eslint-disable-next-line
export default class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    );
  }
}