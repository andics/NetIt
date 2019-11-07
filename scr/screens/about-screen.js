import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import COLORS from '../../assets/styles/colors';
import DESIGNS from '../../assets/styles/designs';

export default class Aboutscreen extends Component {
  render() {
    return (
      <View style={DESIGNS.container}>
        <Text>About Screen</Text>
      </View>
    )
  }
}