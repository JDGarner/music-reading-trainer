import React from "react";
import { StyleSheet, View, Image } from "react-native";

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
    width: 35,
    height: 21,
    position: "absolute"
  }
});
