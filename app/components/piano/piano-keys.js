import React from "react";
import { StyleSheet, View } from "react-native";
import OctaveCtoB from "./octave-c-to-b";
import noteMP3s from "../../data/note-mp3s";

class PianoKeys extends React.Component {

  render() {
    return (
      <View style={styles.pianoKeys}>
        <OctaveCtoB noteMP3s={noteMP3s} />
        <OctaveCtoB noteMP3s={noteMP3s} />
      </View>
    );
  }
}

export default PianoKeys;

const styles = StyleSheet.create({
  pianoKeys: {
    height: "45%",
    alignSelf: "stretch",
    flexDirection: "row"
  }
});
