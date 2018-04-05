import { StyleSheet } from "react-native";

const ChatStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
    alignContent: "flex-start",
    borderColor: "#ff0000"
  },
  closer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(50,50,50,.5)"
  },
  header: {
    flex: 4,
    alignSelf: "center",
    alignItems: "center"
  },
  messageArea: {
    flex: 10,
    width: "100%"
  },
  inputer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    padding: 5,
    borderColor: "#333",
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default ChatStyles;
