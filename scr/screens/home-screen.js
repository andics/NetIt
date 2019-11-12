import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import COLORS from '../../assets/styles/colors';
import DESIGNS from '../../assets/styles/designs';
import Elements from '../utils/dynamic_custom_elements';
this.elements = new Elements()

export default class Homescreen extends Component {
  /*PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
    if (result) {
      console.log("User accept");
    } else {
       console.log("User refuse");
      }
  }); 
   //////
  requestCameraPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    }
    // 
    (state = {
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
    
        const { data } = await Camera.getCameraAsync();
      }*/

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
            onPress={() => this.props.navigation.navigate('Camera')}
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