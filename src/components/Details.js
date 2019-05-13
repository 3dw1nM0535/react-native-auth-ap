import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Details extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : "A Nested Details Screen",
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "NO-DATA");
    return (
      <View style={styles.container}>
        <Text>Details page</Text>
        <Text>Item Id: {JSON.stringify(itemId)}</Text>
        <Text>Other Param: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to details page again"
          onPress={() => {
            this.props.navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100),
            })
          }}
        />
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
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
  },
});
