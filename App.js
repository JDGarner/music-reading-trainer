import React from "react";
import { View } from "react-native";
import Orientation from 'react-native-orientation';

import Game from "./app/containers/game";

export default class App extends React.Component {

  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <Game />
    );
  }
}
