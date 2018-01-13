import React from "react";
import { StyleSheet, View } from "react-native";
import CtoEKeys from "./c-to-e-keys";
import FtoBKeys from "./f-to-b-keys";
import OctaveCtoB from "./octave-c-to-b";

class PianoKeys extends React.Component {
  render() {
    return (
      <View style={styles.pianoKeys}>
        <OctaveCtoB />
        <OctaveCtoB />
      </View>
    );
  }
}
// C4 -> B4
// C5 -> B5
export default PianoKeys;

const styles = StyleSheet.create({
  pianoKeys: {
    height: "45%",
    alignSelf: "stretch",
    flexDirection: "row"
  }
});
