import React from "react";
import { StyleSheet, View } from "react-native";
import CtoEKeys from "./c-to-e-keys";

class PianoKeys extends React.Component {
  render() {
    return (
      <View style={styles.pianoKeys}>
        <CtoEKeys />
      </View>
    );
  }
}

export default PianoKeys;

const styles = StyleSheet.create({
  pianoKeys: {
    height: "45%",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#00F"
  }
});
