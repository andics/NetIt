import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import COLORS from '../../assets/styles/colors';
import DESIGNS from '../../assets/styles/designs';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default class Camerascreen extends Component {
  render() {
    return (
      <View style={DESIGNS.container}>
        <Text>camera</Text>
      </View>
    )
  }
}