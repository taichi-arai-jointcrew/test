/**
 * @flow
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Chat from './chat/Chat';

// eslint-disable-next-line
export default class Router extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>
        <Chat text="this text provided from parent." />
      </View>
    )
  }
}