import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Stave from "./app/components/stave";
import Orientation from 'react-native-orientation';

export default class App extends React.Component {

  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    const notes = ["A5", "E4"]

    return (
      <View style={styles.container}>
        <Stave />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});
