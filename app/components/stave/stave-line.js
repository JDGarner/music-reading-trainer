import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { STAVE_LINE_HEIGHT } from "../../appconfig";

class StaveLine extends React.Component {
  constructor(props) {
    super(props);
    this.lineClasses = [styles.staveLine];
    if (this.props.visible) {
      this.lineClasses.push(styles.visibleStaveLine);
    }
  }

  render() {
    return <View style={this.lineClasses} />;
  }
}

StaveLine.propTypes = {
  visible: PropTypes.bool
};

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
