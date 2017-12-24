import React from "react";
import { View } from "react-native";

import StaveLine from "./stave-line";
import {
  TOTAL_STAVE_LINES,
  VISIBLE_STAVE_LINES,
  INVISIBLE_STAVE_LINES
} from "../appconfig";

export default class StaveLines extends React.Component {
  render() {
    const visibleStaveLines = [];
    for (let i = 0; i < VISIBLE_STAVE_LINES; i++) {
      visibleStaveLines.push(<StaveLine visible key={i} />);
    }

    const upperStaveLines = [];
    for (let i = 0; i < INVISIBLE_STAVE_LINES; i++) {
      upperStaveLines.push(<StaveLine key={i} />);
    }

    const lowerStaveLines = [];
    for (let i = 0; i < INVISIBLE_STAVE_LINES; i++) {
      lowerStaveLines.push(<StaveLine key={i} />);
    }

    return (
      <View>
        {upperStaveLines}
        {visibleStaveLines}
        {lowerStaveLines}
      </View>
    );
  }
}
