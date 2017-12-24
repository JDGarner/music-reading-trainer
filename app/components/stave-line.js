import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { STAVE_LINE_HEIGHT } from "../appconfig";

class StaveLine extends React.Component {
  render() {
    //todo: take this out of render
    const lineClasses = [styles.staveLine];
    if (this.props.visible) lineClasses.push(styles.visibleStaveLine);

    return <View style={lineClasses} />;
  }
}

export default StaveLine;

const styles = StyleSheet.create({
  staveLine: {
    height: STAVE_LINE_HEIGHT,
    alignSelf: "stretch"
  },
  visibleStaveLine: {
    borderTopColor: "grey",
    borderTopWidth: 1
  }
});
