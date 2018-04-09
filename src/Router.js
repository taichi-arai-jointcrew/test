/**
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
// import Chat from './chat/Chat';
import ChatView from './chat/ChatView';
import CommonStyles from './common/commonStyles';
import { AccordionHOC } from './common/hoc/accordion/AccordionHOC';

const Chat = AccordionHOC(ChatView);

// eslint-disable-next-line
export default class Router extends Component<{}> {
  render() {
    return (
      <View style={CommonStyles.container}>
        <StatusBar hidden />
        <Chat props={this.props} opendY='0%' closedY='90%' />
        {/* <ChatView props={{state:{chat:{messages:{id:0, text:'test'}}}}} /> */}
        {/* <Chat text='this text provided from parent.' /> */}
      </View>
    )
  }
}