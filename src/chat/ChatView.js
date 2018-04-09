import React from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import ChatStyles from './ChatStyle';
import CommonStyles from '../common/commonStyles';

const ChatView = props => {
  // const { chat } = props;
  const _imageHeight = 200;
  return (
    <View style={ChatStyles.container}>

      <View style={ChatStyles.header}>
        <Image source={require('../../assets/panorama.jpg')} style={{ height: _imageHeight, left: 0, opacity: 0.5 }} resizeMode={Image.resizeMode.cover} />
        <Text style={[CommonStyles.fontGrey, { marginTop: -_imageHeight + 10 }]}>GeneLife Concierge</Text>
      </View>

      <KeyboardAvoidingView style={ChatStyles.messageArea} behavior='padding'>
        <View style={ChatStyles.messageArea}>
          <ScrollView>
            <Text>message area</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message area</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message area</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            <Text>message</Text>
            {/* <Text>
            {props.chat.messages.id}:{props.chat.messages.text}
            </Text> */}
          </ScrollView>
        </View>

        <View style={ChatStyles.inputer}>
          <TouchableWithoutFeedback>
            <Image />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image />
          </TouchableWithoutFeedback>
          <TextInput style={[ChatStyles.inputer]} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatView;
