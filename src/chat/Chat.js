/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { KeyboardAvoidingView, Dimensions, Image, /*LayoutRectangle,*/ Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import CommonStyles from '../common/commonStyles';

const instructions:string = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = { text: string };
type State = { bgX: number, y: number };
let step: number = 1;
let bgW: number = 10000 >> 1;

// eslint-disable-next-line
export default class Chat extends Component<Props, State> {
  constructor() {
    super();
    this.state = { bgX: 0, y: 0 };
    (this: any).onPress = this.onPress.bind(this);
  }
  componentDidMount() {
    // let timerID:AnimationFrameID = requestAnimationFrame(this.test);
    this.test();
    console.log('didMount');
  }
  onPress() {
    console.log('y;', this.state.y);
    if (this.state.y == 500) this.open();
    if (this.state.y == 0) this.close();
  }

  setPosition(y: number = 0) {
    console.log('y>', y, this.state.y, ~~this.state.y, ~~this.state.y == y, this.state.y != y);
    const changeState = (timestamp: number = 0) => {
      this.setState(prevState => {
        console.log('prev', y, prevState.y, y - prevState.y, (y - prevState.y) * 0.3);
        return {
          bgX: this.state.bgX,
          y: Math.round(this.state.y) == y ? y : prevState.y + (y - prevState.y) * 0.3
        };
      });
      console.log('?', this.state.y);
      if (this.state.y != y) requestAnimationFrame(changeState);
    };
    changeState();
  }
  open() {
    this.setPosition(0);
  }

  close() {
    this.setPosition(500);
  }

  test(timestamp: number = 0) {
    this.setState(prevState => {
      return {
        bgX: this.state.bgX <= -(bgW - Dimensions.get('window').width) ? 0 : prevState.bgX - step,
        y: this.state.y
      };
    });
    requestAnimationFrame(this.test.bind(this));

    // console.log('test', timestamp, this.state.bgX, Dimensions.get('window').width);
  }

  render() {
    return (
      <View style={CommonStyles.container}>
        <Text style={{flex:1, color:'#fff'}}>test text</Text>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={{ flex:1, backgroundColor: '#9df', width: '100%', top: this.state.y }}>
            <Image
              style={{ height: 200, left: this.state.bgX }}
              resizeMode={Image.resizeMode.cover}
              source={require('../../assets/panorama.jpg')}
              onLayout={event => {
                // let layout: LayoutRectangle = event.nativeEvent.layout,
                //   ratio: number = 200 / layout.height;
                // console.log('#', bgW, ratio, layout.height, layout.width);
              }}
            />
            <KeyboardAvoidingView style={{ flex:1, marginTop: 0 }} behavior='padding'>
              <Text style={{ color: '#ff0000' }}>??---{this.props.text}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <Text style={CommonStyles.instructions, { flex:1 }}>{instructions}</Text>
              <TextInput style={{ backgroundColor:'#fff', width: '100%', height: 40, borderColor: 'gray', borderWidth :1 }} />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// const App = ({ text } : {text: string}) => (
//   <View>
//     <Text>test {text}</Text>
//   </View>
// );
// App.propTypes = { text: PropTypes.string.isRequired };
