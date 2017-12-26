import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TOTAL_WHITE_NOTES_DISPLAYED } from "../../appconfig";
import WhiteKey from "./white-key";

export default class CtoEKeys extends React.Component {
  render() {
    return <View style={styles.CtoEKeys}>
      <WhiteKey />
      <WhiteKey />
      <WhiteKey />
    </View>;
  }
}

const keyWidth = Dimensions.get("window").width / TOTAL_WHITE_NOTES_DISPLAYED;

const styles = StyleSheet.create({
  CtoEKeys: {
    width: keyWidth * 3,
    height: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#0FF"
  }
});
