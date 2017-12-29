import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class TouchableKey extends React.Component {
  state = { keyIsPressed: true }

  static propTypes = {
    render: PropTypes.func.isRequired,
    style: PropTypes.any
  }

  onPressOut() {
    this.setState({ keyIsPressed: false });
  }

  onPressIn() {
    this.setState({ keyIsPressed: true });
  }

  render() {
    return (
      <TouchableHighlight
        onPressIn={() => this.onPressIn()}
        onPressOut={() => this.onPressOut()}
        style={this.props.style ? this.props.style : null}
      >
        <View style={this.state.keyIsPressed ? styles.pressedKey : null}>
          {this.props.render()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  pressedKey: {
    backgroundColor: "#0072ff"
  }
});
