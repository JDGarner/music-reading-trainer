import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TOTAL_WHITE_NOTES_DISPLAYED } from "../../appconfig";

export default class WhiteKey extends React.Component {
  render() {
    return <View style={styles.whiteKey} />;
  }
}

const keyWidth = Dimensions.get("window").width / TOTAL_WHITE_NOTES_DISPLAYED;

const styles = StyleSheet.create({
  whiteKey: {
    width: keyWidth,
    height: "100%",
    borderWidth: 1,
    borderColor: "#000"
  }
});
