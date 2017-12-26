import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import StaveLines from "./stave-lines";
import ClefImage from "./clef-image";
import Note from "./note";
import { STAVE_LINE_HEIGHT, TOTAL_STAVE_LINES, NOTE_SPACING } from "../appconfig";

class Stave extends React.Component {

  getChord(chord, index) {
    const offset = NOTE_SPACING * index;

    return chord.map((note, i) => {
      return <Note key={i} note={note} offset={offset} />;
    })
  }

  render() {
    const chordsToDisplay = this.props.notes.map((chord, i) => {
      return this.getChord(chord, i);
    });

    return (
      <View style={styles.musicStave}>
        <StaveLines />
        <ClefImage isTreble={this.props.isTreble} />
        {chordsToDisplay}
      </View>
    );
  }
}

Stave.propTypes = {
  notes: PropTypes.array.isRequired,
  isTreble: PropTypes.bool.isRequired
};

export default Stave;

const STAVE_HEIGHT = STAVE_LINE_HEIGHT * (TOTAL_STAVE_LINES + 1);

const styles = StyleSheet.create({
  musicStave: {
    marginTop: 15,
    paddingTop: STAVE_LINE_HEIGHT,
    paddingBottom: STAVE_LINE_HEIGHT,
    backgroundColor: "rgba(0,0,0,0)",
    height: STAVE_HEIGHT,
    alignSelf: "stretch"
  }
});

// TODO: to make second chords work
    // Make a function that maps through these notes to display them
    // sort the notes alphabetically
    // check if there are an adjacent notes, if so add a prop to the lower one
    // to offset its left by a bit extra