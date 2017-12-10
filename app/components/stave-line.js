import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Note from "./note";

class StaveLine extends React.Component {
  /*
  Need some way to say ok, we want an A5 note:
  An A5 note should be inserted on TREBLE clef ABOVE stave line 2

  Each stave line has an array of note props, each note is either ON or BELOW the line
  This ON or BELOW will determine css position of the note
  If notes array is empty, dont render any notes on this line

  First step:
  Make a stave line component that takes two props noteOnLine and noteBelowLine
  */

  /* Note - C4 is the middle C

  VISIBLE TREBLE LINES:
  F5 -> F5, E5
  D5 -> D5, C5
  B5 -> B5, A5
  G4 -> G4, F4
  E4 -> E4, D4

  noteOnLine and noteBelowLine can just be boolean

  */

  render() {
    return (
      <View style={styles.staveLine}>
        {this.props.noteOnLine && <Note />}
        {this.props.noteBelowLine && <Note />}
      </View>
    );
  }
}

StaveLine.propTypes = {
  noteOnLine: PropTypes.bool,
  noteBelowLine: PropTypes.bool
};

StaveLine.defaultProps = {
  noteOnLine: false,
  noteBelowLine: false
};

export default StaveLine;

const styles = StyleSheet.create({
  staveLine: {
    height: 15,
    alignSelf: "stretch",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    backgroundColor: "rgba(0,0,0,0)"
  }
});
