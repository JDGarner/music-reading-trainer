import React from "react";
import { StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

class ClefImage extends React.Component {
  constructor(props) {
    super(props);
    this.trebleClef = require("../assets/treble-clef.png");
    this.bassClef = require("../assets/bass-clef.png");

    this.styles = this.generateStyles();
  }

  render() {
    const imageSource = this.props.isTreble ? this.trebleClef : this.bassClef;

    return (
      <Image style={this.styles.clefImage} source={imageSource} resizeMode="contain" />
    );
  }

  generateStyles() {
    const topOffset = this.props.isTreble ? 0 : 0;
    const imageWidth = this.props.isTreble ? 30 : 40;

    return StyleSheet.create({
      clefImage: {
        width: imageWidth,
        // height: 100,
        position: "absolute",
        top: topOffset,
        left: 5,
        borderWidth: 1,
        borderColor: "#00F"
      }
    });
  }
}

ClefImage.propTypes = {
  isTreble: PropTypes.bool
};

export default ClefImage;
