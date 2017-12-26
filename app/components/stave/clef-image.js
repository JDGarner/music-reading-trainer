import React from "react";
import { StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

class ClefImage extends React.Component {
  constructor(props) {
    super(props);
    this.trebleClef = require("../../assets/treble-clef.png");
    this.bassClef = require("../../assets/bass-clef.png");

    this.styles = this.generateStyles();
  }

  render() {
    const imageSource = this.props.isTreble ? this.trebleClef : this.bassClef;

    return (
      <Image style={this.styles.clefImage} source={imageSource} resizeMode="contain" />
    );
  }

  generateStyles() {
    const topOffset = this.props.isTreble ? 21 : 35;
    const imageWidth = this.props.isTreble ? 32 : 45;
    const imageHeight = this.props.isTreble ? 80 : 40;

    return StyleSheet.create({
      clefImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: imageWidth,
        height: imageHeight,
        position: "absolute",
        top: topOffset,
        left: 5
      }
    });
  }
}

ClefImage.propTypes = {
  isTreble: PropTypes.bool.isRequired
};

export default ClefImage;
