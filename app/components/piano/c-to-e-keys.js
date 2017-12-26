import React from "react";
import { StyleSheet, View } from "react-native";
import { PIANO_WHITE_KEY_WIDTH } from "../../appconfig";
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

const styles = StyleSheet.create({
  CtoEKeys: {
    width: PIANO_WHITE_KEY_WIDTH * 3,
    height: "100%",
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#0FF"
  }
});
