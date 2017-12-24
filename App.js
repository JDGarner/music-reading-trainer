import React from "react";
import { StyleSheet, View } from "react-native";
import Orientation from 'react-native-orientation';

import Stave from "./app/components/stave";
import { exampleLevel } from "./app/data/level";

export default class App extends React.Component {

  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <View style={styles.container}>
        <Stave clefName="treble-clef" notes={exampleLevel} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});
