import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Settings from './screens/Settings';
import Home from './screens/Home';
import Auth from './services/Auth';
import Login from './screens/Login';
import Signup from './screens/Signup';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home },
  LoginScreen: { screen: Login },
  SignupScreen: { screen: Signup },
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}