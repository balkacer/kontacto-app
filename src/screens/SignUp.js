import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { ToastAndroid } from 'expo';
import { Style } from "../tools";
import Theme from "../theme/theme";
import HttpService from "../service";
import { FormMultiparts } from "../components";

const form = [
  [
    {
      property: 'firstName',
      label: 'First name',
      valueType: 'text',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondName',
      label: 'Second name',
      valueType: 'text',
      validations: {
        isRequired: false,
      }
    },
    {
      property: 'firstSurname',
      label: 'First surname',
      valueType: 'text',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondSurname',
      label: 'Second surname',
      valueType: 'text',
      validations: {
        isRequired: false,
      }
    }
  ],
  [
    {
      property: 'email',
      label: 'Email',
      valueType: 'text',
      validations: {
        isRequired: true,
        isMatchWith: ''
      }   
    },
    {
      property: 'password',
      label: 'Pasword',
      valueType: 'text',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'password',
      label: 'Confirm Pasword',
      valueType: 'text',
      validations: {
        isRequired: true,
        isMatchWith: ''
      }
    }   
  ],
  [
    {
      property: 'work',
      label: 'Work Name',
      valueType: 'text',
      isRequiredd: true
    },
    {
      property: 'age',
      label: 'Age',
      valueType: 'number',
      isRequiredd: true
    },
    {
      property: 'birthday',
      label: 'Birthday',
      valueType: 'text',
      isRequired: false
    },
  ]
]

export default class SignUpScreen extends Component {

  httpSv = new HttpService();

  postRegister = () => {
    const user = this.state;
    this.httpSv.post('user', user).then((res) => {
      ToastAndroid.show(res.message, ToastAndroid.SHORT);
    }).catch(err => console.info(err))
  }

  render () {
    return (
      <View style={Style.screen}>
        <Text style={{color: "#f00", fontSize: 34}}>Sign Up</Text>
        <TouchableOpacity onPress={() => console.log('thing')}>
          <Image
            style={Style.image}
            defaultSource={require('../../assets/img/default.png')}
          />
        </TouchableOpacity>

        <FormMultiparts items={form}/>
      </View>
    );
  }
}


{/* <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({firstName: text})}
          value={this.state.firstName}
          placeholderTextColor={Theme.colorInputsPlaceholder}
          placeholder="First name"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({secondName: text})}
          value={this.state.secondName}
          placeholderTextColor={Theme.colorInputsPlaceholder}
          placeholder="Second name"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({firstSurname: text})}
          value={this.state.firstSurname}
          placeholderTextColor={Theme.colorInputsPlaceholder}
          placeholder="First surname"
        />
        <TextInput
          style={Style.input}
          onChangeText={(text) => this.setState({secondSurname: text})}
          value={this.state.secondSurname}
          placeholderTextColor={Theme.colorInputsPlaceholder}
          placeholder="Second surname"
        /> */}