import React from "react";
import { StyleSheet, View } from "react-native";

import StaveLines from "./stave-lines";
import Note from "./note";
import { notes } from "../data/notes";
import {
  STAVE_LINE_HEIGHT,
  TOTAL_STAVE_LINES
} from "../appconfig";

export default class Stave extends React.Component {

  render() {
    const { A4, C4, E4, F5, A6, B6 } = notes;

    const notesToDisplay = [B6, F5, E4, C4];

    // TODO: to make second chords work
    // Make a function that maps through these notes to display them
    // sort the notes alphabetically
    // check if there are an adjacent notes, if so add a prop to the lower one
    // to offset its left by a bit extra

    return (
      <View style={styles.musicStave}>
        <StaveLines />
        <Note note={B6} />
        <Note note={F5} />
        <Note note={E4} />
        <Note note={C4} />
      </View>
    );
  }
}

const STAVE_HEIGHT = STAVE_LINE_HEIGHT * (TOTAL_STAVE_LINES + 1);

const styles = StyleSheet.create({
  musicStave: {
    paddingTop: STAVE_LINE_HEIGHT,
    paddingBottom: STAVE_LINE_HEIGHT,
    backgroundColor: "rgba(0,0,0,0)",
    height: STAVE_HEIGHT,
    alignSelf: "stretch"
  }
});
