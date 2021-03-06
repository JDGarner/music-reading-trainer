import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteKey from "./white-key";
import BlackKey from "./black-key";

export default class FtoBKeys extends React.Component {
  render() {
    return <View style={styles.FtoBKeys}>
      <WhiteKey />
      <BlackKey keyPosition={1} />
      <WhiteKey />
      <BlackKey keyPosition={2} />
      <WhiteKey />
      <BlackKey keyPosition={3} />
      <WhiteKey />
    </View>;
  }
}

const styles = StyleSheet.create({
  FtoBKeys: {
    height: "100%",
    flexDirection: "row"
  }
});
