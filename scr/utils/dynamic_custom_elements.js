import COLORS from '../../assets/styles/colors';
import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

export default class Elements{
circleButton = function(button_radius) {
    return {
        padding: 5,
        height: button_radius,
        width: button_radius,  //The Width must be the same as the height
        borderRadius: button_radius*2, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: COLORS.BLUE.SECONDARY_ELEMENTS,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    }
  }
}