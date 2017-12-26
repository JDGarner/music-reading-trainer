import React from "react";
import { StyleSheet, View } from "react-native";
import { PIANO_WHITE_KEY_WIDTH } from "../../appconfig";

export default class WhiteKey extends React.Component {
  render() {
    return <View style={styles.whiteKey} />;
  }
}

const styles = StyleSheet.create({
  whiteKey: {
    width: PIANO_WHITE_KEY_WIDTH,
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#000"
  }
});
