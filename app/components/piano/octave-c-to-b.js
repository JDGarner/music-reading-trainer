import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteKey from "./white-key";
import BlackKey from "./black-key";

export default class OcataveCtoB extends React.Component {
  render() {
    return <View style={styles.OcataveCtoB}>
      <WhiteKey />
      <BlackKey keyPosition={1} />
      <WhiteKey />
      <BlackKey keyPosition={2} />
      <WhiteKey />
      <WhiteKey />
      <BlackKey keyPosition={4} />
      <WhiteKey />
      <BlackKey keyPosition={5} />
      <WhiteKey />
      <BlackKey keyPosition={6} />
      <WhiteKey />
    </View>;
  }
}

const styles = StyleSheet.create({
  OcataveCtoB: {
    height: "100%",
    flexDirection: "row"
  }
});
