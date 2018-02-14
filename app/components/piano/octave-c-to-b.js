import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteKey from "./white-key";
import BlackKey from "./black-key";
import { array } from "prop-types";

export default class OcataveCtoB extends React.Component {

  static propTypes = {
    noteMP3s: array.isRequired
  };

  render() {
    const [A4, Ash4, B4, C4, Csh4, D4, Dsh4, E4, F4, Fsh4, G4, Gsh4] = this.props.noteMP3s;

    return <View style={styles.OcataveCtoB}>
      <WhiteKey noteMP3={C4} />
      <BlackKey noteMP3={Csh4} keyPosition={1} />
      <WhiteKey noteMP3={D4} />
      <BlackKey noteMP3={Dsh4} keyPosition={2} />
      <WhiteKey noteMP3={E4} />
      <WhiteKey noteMP3={F4} />
      <BlackKey noteMP3={Fsh4} keyPosition={4} />
      <WhiteKey noteMP3={G4} />
      <BlackKey noteMP3={Gsh4} keyPosition={5} />
      <WhiteKey noteMP3={A4} />
      <BlackKey noteMP3={Ash4} keyPosition={6} />
      <WhiteKey noteMP3={B4} />
    </View>;
  }
}

const styles = StyleSheet.create({
  OcataveCtoB: {
    height: "100%",
    flexDirection: "row"
  }
});
