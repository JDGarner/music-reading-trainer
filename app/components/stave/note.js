import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import PropTypes from "prop-types";

import {
  STAVE_LINE_HEIGHT,
  SEMIBREVE_IMG_HEIGHT,
  SEMIBREVE_IMG_WIDTH,
  NOTE_TOP_OFFSET,
  NOTE_LEFT_OFFSET
} from "../../appconfig";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.generateStyles();
  }

  renderLedgerLines() {
    if (this.props.note.ledgerLine) {
      const ledgerLineStyle = [
        this.styles.ledgerLine,
        this.styles[this.props.note.ledgerLineStyle]
      ];
      return <View style={ledgerLineStyle} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={this.styles.note}>
        {this.renderLedgerLines()}
        <Image
          style={this.styles.noteImage}
          source={require("../../assets/semibreve.png")}
          resizeMode="contain"
        />
      </View>
    );
  }

  generateStyles() {
    const leftOffset = NOTE_LEFT_OFFSET + this.props.offset;

    return StyleSheet.create({
      note: {
        width: SEMIBREVE_IMG_WIDTH * (STAVE_LINE_HEIGHT / SEMIBREVE_IMG_HEIGHT),
        height: STAVE_LINE_HEIGHT,
        position: "absolute",
        top: STAVE_LINE_HEIGHT * (this.props.note.line + NOTE_TOP_OFFSET),
        left: leftOffset + "%"
      },
      noteImage: {
        width: "100%",
        height: "100%",
        alignSelf: "stretch"
      },
      ledgerLine: {
        width: "120%",
        position: "absolute",
        left: "-10%",
        borderTopColor: "grey",
        borderTopWidth: 1
      },
      upperLedgerLine: {
        top: "4%"
      },
      middleLedgerLine: {
        top: "50%"
      },
      lowerLedgerLine: {
        top: "96%"
      }
    });
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired
};

export default Note;
