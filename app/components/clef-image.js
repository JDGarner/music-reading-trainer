import React from "react";
import { StyleSheet, Image } from "react-native";

export default class ClefImage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.styles = this.generateStyles();
  // }

  render() {
    return (
      <Image
        style={styles.clefImage}
        source={require("../assets/treble-clef.png")}
        resizeMode="contain"
      />
    );
  }
}
const styles = StyleSheet.create({
  clefImage: {
    width: 50,
    height: 100,
    position: "absolute",
    top: 0,
    left: 0
  }
});
