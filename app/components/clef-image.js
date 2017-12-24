import React from "react";
import { StyleSheet, Image } from "react-native";
import PropTypes from 'prop-types';

const ClefImage = props => {
  const imagePath = "../assets/" + this.props.imageName + ".png";
  const imageSource = require(imagePath);

  return (
    <Image style={styles.clefImage} source={imageSource} resizeMode="contain" />
  );
};

ClefImage.propTypes = {
  imageName: PropTypes.string
};

export default ClefImage;

const styles = StyleSheet.create({
  clefImage: {
    width: 50,
    height: 100,
    position: "absolute",
    top: 0,
    left: 0
  }
});
