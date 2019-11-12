import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import COLORS from '../../assets/styles/colors';
import DESIGNS from '../../assets/styles/designs';
import Elements from '../utils/dynamic_custom_elements';
import * as Permissions from 'expo-permissions';
import { Linking } from 'expo';
import { Camera } from 'expo-camera';
this.elements = new Elements()

export default class Homescreen extends Component {
    state = {
        status: null,
      };
      
      permissionFlow = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
        this.setState({ status });
    
        if(status !== 'granted'){
          Linking.openURL('app-settings:');
          return;
        }else{
            this.props.navigation.navigate('Camera');
        }
    
        //const { data } = await Camera.getCameraAsync();
      }

    render() {
      return (
        <View style={DESIGNS.container_home}>
        <Text style={DESIGNS.welcome_text}> 
        NetIt
        </Text>

        <View style={{
        flex: 1,
        backgroundColor: COLORS.BLUE.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <Button 
            style = {[elements.circleButton(200)]}
            type = "clear"
            onPress={this.permissionFlow}
            title = "Go!"
            titleStyle = {DESIGNS.button_text}
            />
        </View>
        
        <View style={DESIGNS.container_settings}>
            <View style={DESIGNS.container_left}>
                <Button 
                    icon={
                    <Icon
                    name = "settings-applications"
                    size={70}
                    color={COLORS.GREEN.BUTTON}
                    />
                    }
                    type = "clear"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
            <View style={DESIGNS.container_right}>
                <Button 
                    icon={
                    <Icon
                    name = "flash-on"
                    size={70}
                    color={COLORS.RED.FIRE_ENGINE_RED}
                    />
                    }
                    type = "clear"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        </View>

        </View>
      )
    }
}