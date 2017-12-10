import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { STAVE_LINE_HEIGHT } from "../appconfig";

class StaveLine extends React.Component {
  render() {
    return <View style={styles.staveLine} />;
  }
}

export default StaveLine;

const styles = StyleSheet.create({
  staveLine: {
    height: STAVE_LINE_HEIGHT,
    alignSelf: "stretch",
    borderTopColor: "grey",
    borderTopWidth: 1
  }
});
