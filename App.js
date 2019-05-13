/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "./src/components/Auth";
import HomeScreen from "./src/components/Home";
import OtherScreen from "./src/components/Other";
import SignInScreen from "./src/components/SignIn";

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen,
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: "AuthLoading",
}));

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
