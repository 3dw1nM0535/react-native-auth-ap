import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage"

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}