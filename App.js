import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigator from './src/routes';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Theme from './src/theme/theme';

export default class App extends Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Louis George Cafe': require('./assets/fonts/Louis_George_Cafe.ttf'),
      'Louis George Cafe Light': require('./assets/fonts/Louis_George_Cafe_Light.ttf'),
      'Louis George Cafe Bold': require('./assets/fonts/Louis_George_Cafe_Bold.ttf')
    });
    this.setState({ isFontLoaded: true })
  }

  render() {
    return (
      <>
        { 
          !this.state.isFontLoaded
          ? <AppLoading />
          : <Navigator />
        }
        <StatusBar style='light' backgroundColor={Theme.colorInputsPlaceholder} />
      </>
    );
  }
}
