import React, { Component } from "react";
import { Image } from "react-native";

export default class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={{uri: "https://res.cloudinary.com/dazskjikr/image/upload/v1557748890/edwin.jpg"}}
        style={{width: 30, height: 30}}
      />
    );
  }
}