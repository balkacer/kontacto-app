import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigator from "./src/routes";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default class App extends Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'GeosansLight': require('./assets/fonts/GeosansLight.ttf'),
      'Cocogoose-Classic-Medium': require('./assets/fonts/Cocogoose-Classic-Medium.ttf'),
      'Cocogoose-Classic-Bold': require('./assets/fonts/Cocogoose-Classic-Bold.ttf')
    });
    this.setState({ isFontLoaded: true })
  }

  render() {
    if (!this.state.isFontLoaded) {
      return (
         <AppLoading />
      );
    }

    return (      
      <>
        <Navigator />
        <StatusBar style="dark" />
      </>
    );
  }
}
