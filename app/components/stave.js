import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StaveLine from "./stave-line";

export default class Stave extends React.Component {
  constructor(props) {
    super(props);
    this.NUM_OF_STAVE_LINES = 5;
  }

  /*
  Need some way to say ok, we want an A5 note:
  An A5 note should be inserted on TREBLE clef ABOVE stave line 2

  Stave lines = 1 to 5, 1 is at bottom, 5 is at top

  A stave should be passed props that contain an array of notes to be displayed
  E.g. ["A5", "C5", "G6"]
  Each stave line can be the parent of a two notes (the note on it and the note below it)
  E.g. TREBLE-1 -> ["D5", "E5"] TREBLE-2 -> ["F5", "G5"]

  Each stave line has an array of note props, each note is either ON or BELOW the line
  This ON or BELOW will determine css position of the note
  If notes array is empty, dont render any notes on this line

  TODO: check if 5 is correct for note number treble clef


  First step:
  Make a stave line component that takes two props noteOnLine and noteBelowLine

  */

  render() {
    var staveLines = [];

    for (var i = 0; i < this.NUM_OF_STAVE_LINES; i++) {
      staveLines.push(<StaveLine
        key={i}
        noteOnLine={true}
        noteBelowLine={false}
      />);
    }

    return (
      <View style={styles.musicStave}>
        {staveLines}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  musicStave: {
    height: 75,
    alignSelf: "stretch"
  },
  staveLine: {
    height: 15,
    alignSelf: "stretch",
    borderBottomColor: "#000",
    borderBottomWidth: 1
  }
});
