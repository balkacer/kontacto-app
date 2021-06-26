import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Style } from '../tools';
import HttpService from '../service';
import { Button } from '../components';

export default class HomeScreen extends Component {

  httpSv = new HttpService();

  render () {
    return (
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/originals/20/79/03/2079033abc8314be554f9d24f562a199.jpg' }}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={Style.screen}>
          <Text style={{color: '#FFF'}}>Home</Text>
          <Button caption='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')}/>
        </View>
      </ImageBackground>
    );
  }
}
