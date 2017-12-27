import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteKey from "./white-key";
import BlackKey from "./black-key";

export default class CtoEKeys extends React.Component {
  render() {
    return <View style={styles.CtoEKeys}>
      <WhiteKey />
      <BlackKey keyPosition={1} />
      <WhiteKey />
      <BlackKey keyPosition={2} />
      <WhiteKey />
    </View>;
  }
}

const styles = StyleSheet.create({
  CtoEKeys: {
    height: "100%",
    flexDirection: "row"
  }
});
