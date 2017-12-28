import React from "react";
import { TouchableHighlight } from "react-native";

export default function TouchableKey(KeyComponent) {
  return class extends React.Component {
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
        >
          <KeyComponent keyIsPressed={this.state.keyIsPressed} />
        </TouchableHighlight>
      );
    }
  };
}
