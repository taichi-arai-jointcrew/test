import { StyleSheet, Platform } from "react-native";

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#8fb",
    alignContent: "flex-start",
    marginTop: Platform.select({ android: 20 })
  },
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  fontWhite: {
    color: '#fff',
  },
  fontGrey: {
    color: '#666'
  },
  fontEnhance: {
    fontSize: 20,
  }
});

export default CommonStyles;
