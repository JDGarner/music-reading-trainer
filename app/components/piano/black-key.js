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
    keyPosition: PropTypes.number.isRequired // keyPosition denotes after how many white keys the black key is inserted
  }

  render() {
    return (
      <TouchableKey
        style={this.styles.touchableKey}
        render={() => <View style={this.styles.blackKey} />}
      />
    );
  }

  generateStyles() {
    const whiteKeyWidth = getWhiteKeyWidth(Dimensions.get("window"));
    const blackKeyWidth = whiteKeyWidth * 0.5;
    const leftOffset =
      whiteKeyWidth * this.props.keyPosition - blackKeyWidth / 2;

    return StyleSheet.create({
      touchableKey: {
        height: "55%",
        position: "absolute",
        left: leftOffset,
        zIndex: 1
      },
      blackKey: {
        height: "100%",
        width: blackKeyWidth,
        backgroundColor: "#000"
      }
    });
  }
}