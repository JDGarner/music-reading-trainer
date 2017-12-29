import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class TouchableKey extends React.Component {
  state = { keyIsPressed: false };

  static propTypes = {
    render: PropTypes.func.isRequired,
    style: PropTypes.any
  };

  onPressOut() {
    this.setState({ keyIsPressed: false });
  }

  onPressIn() {
    this.setState({ keyIsPressed: true });
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.onPressIn()}
        onPressOut={() => this.onPressOut()}
        style={this.props.style ? this.props.style : null}
      >
        {this.props.render(this.state)}
      </TouchableWithoutFeedback>
    );
  }
}

