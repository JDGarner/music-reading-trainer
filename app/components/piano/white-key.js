import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { getWhiteKeyWidth } from "../../utils/utils";
import TouchableKey from "./touchable-key";

class WhiteKey extends React.Component {
  render() {
    // TODO: set this on the touchableKey styles so I can reuse it for black keys
    const keyStyles = [styles.whiteKey];
    if (this.props.keyIsPressed) {
      keyStyles.push(styles.pressedKey);
    }

    return <View style={keyStyles} />;
  }
}

const TouchableWhiteKey = TouchableKey(WhiteKey);
export default TouchableWhiteKey;

const keyWidth = getWhiteKeyWidth(Dimensions.get("window"));
const styles = StyleSheet.create({
  whiteKey: {
    height: "100%",
    width: keyWidth,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF"
  },
  pressedKey: {
    backgroundColor: "#adfff1"
  }
});
