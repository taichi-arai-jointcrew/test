/**
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import Chat from './chat/Chat';
import ChatView from './chat/ChatView';
import CommonStyles from './common/commonStyles';

// eslint-disable-next-line
export default class Router extends Component<{}> {
  render() {
    return (
      <View style={CommonStyles.container}>
        <StatusBar hidden />
        <ChatView props={{state:{chat:{messages:{id:0, text:"test"}}}}} />
        {/* <Chat text="this text provided from parent." /> */}
      </View>
    )
  }
}