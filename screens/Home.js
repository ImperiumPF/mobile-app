import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the Home screen</Text>
        <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"/>
        <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
      </View>
    )
  }
};