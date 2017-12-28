import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { getWhiteKeyWidth } from "../../utils/utils";
import PropTypes from "prop-types";

class BlackKey extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.generateStyles();
  }

  render() {
    return <View style={this.styles.blackKey} />;
  }

  generateStyles() {
    const whiteKeyWidth = getWhiteKeyWidth(Dimensions.get("window"));
    const blackKeyWidth = whiteKeyWidth * 0.5;
    const leftOffset = (whiteKeyWidth * this.props.keyPosition) - (blackKeyWidth/2);

    return StyleSheet.create({
      blackKey: {
        height: "55%",
        width: blackKeyWidth,
        position: "absolute",
        left: leftOffset,
        backgroundColor: "#000",
        zIndex: 1
      }
    });
  }
}

// keyPosition denotes after how many white keys the black key is inserted
BlackKey.propTypes = {
  keyPosition: PropTypes.number.isRequired
};

export default BlackKey;


