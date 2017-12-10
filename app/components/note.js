import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { STAVE_LINE_HEIGHT, SEMIBREVE_IMG_HEIGHT, SEMIBREVE_IMG_WIDTH } from "../appconfig";

export default class Note extends React.Component {
  render() {
    return (
      <Image
        style={styles.note}
        source={require("../assets/semibreve.png")}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  note: {
    width: SEMIBREVE_IMG_WIDTH * (STAVE_LINE_HEIGHT/SEMIBREVE_IMG_HEIGHT),
    height: STAVE_LINE_HEIGHT,
    position: "absolute",
    top: STAVE_LINE_HEIGHT * 3,
    left: 50
  }
});
