import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Sound from "react-native-sound";
// import {A4} from "../../data/note-mp3s";

export default class TouchableKey extends React.Component {
  state = { keyIsPressed: false };

  static propTypes = {
    render: PropTypes.func.isRequired,
    noteMP3: PropTypes.any.isRequired,
    style: PropTypes.any
  };

  constructor(props) {
    super(props);
    Sound.setCategory("Playback");
    
    this.noteMP3 = new Sound(this.props.noteMP3);
    console.log("kbjknjl");
    // const note = "A4";
    // this.noteMP3 = new Sound(`../../assets/sound/${note}.mp3`, (error) => {
    //   if (error) {
    //     console.log('failed to load the sound', error);
    //     return;
    //   }
    //   // loaded successfully
    //   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    // });
  }

  onPressOut() {
    this.setState({ keyIsPressed: false });
  }

  onPressIn() {
    this.setState({ keyIsPressed: true });
    this.noteMP3.stop();
    this.noteMP3.play();
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
