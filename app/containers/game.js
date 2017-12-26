import React from "react";
import { StyleSheet, View } from "react-native";

import Stave from "../components/stave";
import PianoKeys from "../components/piano-keys";
import { exampleLevel } from "../data/level";

export default class Game extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Stave isTreble={false} notes={exampleLevel} />
        <PianoKeys />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "space-between"
  }
});
