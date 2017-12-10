import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { STAVE_LINE_HEIGHT } from "../appconfig";

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
    width: 20,
    height: STAVE_LINE_HEIGHT,
    position: "absolute",
    top: STAVE_LINE_HEIGHT/2,
    left: 50
  }
});
