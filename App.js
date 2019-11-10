import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './scr/screens/home-screen';
import AboutScreen from './scr/screens/about-screen';
import CameraScreen from './scr/screens/camera-screen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  About: {screen: AboutScreen},
  Camera: {screen: CameraScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
