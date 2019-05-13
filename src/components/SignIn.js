import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage"

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign In",
  }

  render() {
    return (
      <View>
        <Button title="Sign In" onPress={this._signInAsync} />
      </View>
    )
  }

  _signInAsync = async() => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate("App");
  }
}