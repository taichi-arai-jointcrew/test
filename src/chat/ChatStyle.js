import { StyleSheet } from 'react-native';

const ChatStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    alignContent: 'flex-start',
    borderColor: '#ff0000'
  },
  header: {
    flex: 4,
    alignSelf: 'center',
    alignItems: 'center'
  },
  messageArea: {
    flex: 10,
    width: '100%'
  },
  inputer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#333',
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default ChatStyles;
