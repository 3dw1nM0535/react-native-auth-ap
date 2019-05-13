import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class OtherScreen extends Component {
  render() {
    return (
      <View>
        <Text>Other Screen</Text>
        <Button
          title='Go home'
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}