import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { getWhiteKeyWidth } from "../../utils/utils";
import TouchableKey from "./touchable-key";

export default class WhiteKey extends React.Component {
  render() {
    return (
      <TouchableKey render={() => (
        <View style={styles.whiteKey} />
      )}/>
    )
  }
}

const keyWidth = getWhiteKeyWidth(Dimensions.get("window"));
const styles = StyleSheet.create({
  whiteKey: {
    height: "100%",
    width: keyWidth,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF"
  }
});
