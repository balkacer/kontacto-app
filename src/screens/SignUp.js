import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { ToastAndroid } from 'expo';
import { Style } from "../tools";
import Theme from "../theme/theme";
import HttpService from "../service";
import { FormMultiparts, ImagePicker } from "../components";

const form = [
  [
    {
      property: 'firstName',
      label: 'First name',
      valueType: 'name',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondName',
      label: 'Second name',
      valueType: 'name',
      validations: {
        isRequired: false,
      }
    },
    {
      property: 'firstSurname',
      label: 'First surname',
      valueType: 'name',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondSurname',
      label: 'Second surname',
      valueType: 'name',
      validations: {
        isRequired: false,
      }
    }
  ],
  [
    {
      property: 'username',
      label: 'Username',
      valueType: 'username',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'email',
      label: 'Email',
      valueType: 'email',
      validations: {
        isRequired: true,
      }   
    },
    {
      property: 'password',
      label: 'Pasword',
      valueType: 'password',
      validations: {
        isRequired: true,
        hasMinLengthOf: 8
      }
    },
    {
      property: 'confirmPassword',
      label: 'Confirm Pasword',
      valueType: 'password',
      validations: {
        isMatchWith: 'password'
      }
    }   
  ],
  [
    {
      property: 'work',
      label: 'Work Name',
      valueType: 'text',
      validations: {
        isRequiredd: true
      }
    },
    {
      property: 'age',
      label: 'Age',
      valueType: 'int',
      validations: {
        isRequiredd: true,
        hasMinValueOf: 10,
        hasMaxValueOf: 60
      }
    },
    {
      property: 'birthday',
      label: 'Birthday',
      valueType: 'date',
      validations: {
        isRequired: false,
        hasMinValueOf: 10
      }
    },
  ]
]

export default class SignUpScreen extends Component {

  httpSv = new HttpService();

  signUp = (user) => {
    // this.httpSv.post('user', user).then((res) => {
    //   ToastAndroid.show(res.message, ToastAndroid.SHORT);
    // }).catch(err => console.info(err))

    console.log(user);
  }

  render () {
    return (
      <View style={[Style.screen, {paddingTop: 80}]}>
        <Text style={{color: Theme.colorPrimary, fontSize: 34, fontFamily: 'Louis George Cafe Bold'}}>Sign Up</Text>
        <View style={{paddingTop: 40, flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ImagePicker />
          <FormMultiparts items={form} lastBtnCaption="Sign Up" onSubmit={(data) => {this.signUp(data)}}/>
        </View>
      </View>
    );
  }
}
