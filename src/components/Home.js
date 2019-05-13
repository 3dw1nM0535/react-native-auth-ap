import React, { Component } from "react";
import { StyleSheet, View, Button } from 'react-native';

import AsyncStorage from "@react-native-community/async-storage"

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome",
  }

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out" onPress={this._signMeOut} />
      </View>
    );
  }

  _showMoreApp = () => this.props.navigation.navigate("Other");

  _signMeOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
