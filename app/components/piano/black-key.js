import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { getWhiteKeyWidth } from "../../utils/utils";
import TouchableKey from "./touchable-key";

export default class BlackKey extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.generateStyles();
  }

  static propTypes = {
    keyPosition: PropTypes.number.isRequired, // keyPosition denotes after how many white keys the black key is inserted
    noteMP3: PropTypes.any.isRequired
  };

  render() {
    return (
      <TouchableKey
        style={this.styles.touchableKey}
        noteMP3={this.props.noteMP3}
        render={state => {
          const keyStyles = [this.styles.blackKey];
          if (state.keyIsPressed) keyStyles.push(this.styles.pressedKey);

          return <View style={keyStyles} />;
        }}
      />
    );
  }

  generateStyles() {
    const whiteKeyWidth = getWhiteKeyWidth(Dimensions.get("window"));
    const blackKeyWidth = whiteKeyWidth * 0.55;
    const leftOffset =
      whiteKeyWidth * this.props.keyPosition - blackKeyWidth / 2;

    return StyleSheet.create({
      touchableKey: {
        height: "60%",
        position: "absolute",
        left: leftOffset,
        zIndex: 1
      },
      blackKey: {
        height: "100%",
        width: blackKeyWidth,
        backgroundColor: "#000"
      },
      pressedKey: {
        backgroundColor: "red"
      }
    });
  }
}
