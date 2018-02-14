import React from "react";
import { StyleSheet, View } from "react-native";

import Stave from "../components/stave/stave";
import PianoKeys from "../components/piano/piano-keys";
import { easyLevel, exampleLevel } from "../data/level";

export default class Game extends React.Component {

  state = { currentNotes: easyLevel[0] };

  render() {
    return (
      <View style={styles.container}>
        <Stave isTreble={false} notes={easyLevel} />
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
