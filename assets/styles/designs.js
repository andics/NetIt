import React from 'react';
import COLORS from './colors'
import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container_home: {
      flex: 1,
      backgroundColor: COLORS.BLUE.BACKGROUND,
      borderWidth: 10,
      borderColor: COLORS.BLUE.BORDER_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_settings: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.BLUE.BACKGROUND,
        alignItems: 'center'
     //   flexDirection: 'column'
    },
    container_left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    container_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    welcome_text: {
      fontSize: 50,
      color: COLORS.BLUE.TEXT
      
    },
    button_text: {
        fontSize: 50,
        color: COLORS.BLUE.TEXT,
        backgroundColor: COLORS.BLUE.SECONDARY_ELEMENTS
    }
  });