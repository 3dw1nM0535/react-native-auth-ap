import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default class Modal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>This is amodal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
