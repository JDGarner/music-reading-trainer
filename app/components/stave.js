import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StaveLine from "./stave-line";
import Note from "./note";
import { STAVE_LINE_HEIGHT, NUM_OF_STAVE_LINES } from "../appconfig";

export default class Stave extends React.Component {

  /*
  Notes can no longer be the children of the stave line due to
  overflow visible not working on Android

  They will have to be children of the stave.

  Atm I have set number of lines STAVE_LINE_HEIGHT apart.
  If I want to plot a particular note, I need to know what stave line it should be
  ON or BELOW

  Map:
  A5: {
    Cleff: "TREBLE" // TREBLE or BASS
    Line: 3 // 1-5
    Position: "BELOW" // ON or ABOVE
  }

  Staves take a series of notes, e.g. Notes=["A5", "C4", "E5"] // Notes are objects not strings
  And plot them accordingly, using Line and Positon properites to determine "top" offset


  VISIBLE TREBLE LINES:
  F5 -> F5, E5
  D5 -> D5, C5
  B5 -> B5, A5
  G4 -> G4, F4
  E4 -> E4, D4
  */

  render() {
    var staveLines = [];

    for (var i = 0; i < NUM_OF_STAVE_LINES; i++) {
      staveLines.push(<StaveLine
        key={i}
      />);
    }

    // G5 -> Line number = 0.5 -> Offset = STAVE_LINE_HEIGHT * 0
    // F5 -> Line number = 1 && -> Offset = STAVE_LINE_HEIGHT * 0.5
    // E5 -> Line number = 1.5 && -> Offset = STAVE_LINE_HEIGHT * 1
    // D5 -> Line number = 2 && -> Offset = STAVE_LINE_HEIGHT * 1.5

    // Offset = STAVE_LINE_HEIGHT * (lineNumber - 0.5)
    // lineNumber = what line it is on, .5 means in between lines

    return (
      <View style={styles.musicStave}>
        {staveLines}
        <Note />
      </View>
    );
  }
}

const STAVE_HEIGHT = STAVE_LINE_HEIGHT * (NUM_OF_STAVE_LINES+2);

const styles = StyleSheet.create({
  musicStave: {
    paddingTop: STAVE_LINE_HEIGHT,
    paddingBottom: STAVE_LINE_HEIGHT,
    backgroundColor: "rgba(0,0,0,0)",
    height: STAVE_HEIGHT,
    alignSelf: "stretch"
  }
});
