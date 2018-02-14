import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { getWhiteKeyWidth } from "../../utils/utils";
import TouchableKey from "./touchable-key";
import { any } from "prop-types";

export default class WhiteKey extends React.Component {
  static propTypes = {
    noteMP3: any.isRequired
  };

  render() {
    return (
      <TouchableKey
        noteMP3={this.props.noteMP3}
        render={state => {
          const keyStyles = [styles.whiteKey];
          if (state.keyIsPressed) keyStyles.push(styles.pressedKey);

          return <View style={keyStyles} />;
        }}
      />
    );
  }
}

const keyWidth = getWhiteKeyWidth(Dimensions.get("window"));
const styles = StyleSheet.create({
  whiteKey: {
    height: "100%",
    width: keyWidth,
    borderWidth: 1,
    borderColor: "#000"
  },
  pressedKey: {
    backgroundColor: "red"
  }
});
