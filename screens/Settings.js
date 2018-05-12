import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
        <Button onPress={() => this.props.navigation.navigate('SignupScreen')} title="Signup"/>
      </View>
    )
  }
};