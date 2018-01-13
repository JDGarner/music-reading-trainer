import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Sound from "react-native-sound";
import C4MP3 from "../../assets/sound/c4.mp3";

export default class TouchableKey extends React.Component {
  state = { keyIsPressed: false };

  constructor(props) {
    super(props);
    Sound.setCategory('Playback');
    this.C4 = new Sound(C4MP3, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + this.C4.getDuration()  + 'number of channels: ' + this.C4.getNumberOfChannels());
    });
  }

  static propTypes = {
    render: PropTypes.func.isRequired,
    style: PropTypes.any
  };

  onPressOut() {
    this.setState({ keyIsPressed: false });
    // stop sound ?
  }

  onPressIn() {
    this.setState({ keyIsPressed: true });
    this.C4.stop();
    this.C4.play();
    // play sound
  }

  render() {
    return (
      <TouchableOpacity
        onPressIn={() => this.onPressIn()}
        onPressOut={() => this.onPressOut()}
        activeOpacity={1}
        style={this.props.style ? this.props.style : null}
      >
        {this.props.render(this.state)}
      </TouchableOpacity>
    );
  }
}
