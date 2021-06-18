import React, { Component } from "react";
import {
  Animated,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { Color, Style } from "../tools";
import Theme from "../theme/theme";

export default class FormMultipartComponent extends Component {
  currentPart = 0;
  numItems = this.props.items.length;

  constructor(props) {
    super(props);

    this.state = {};

    this.props.items.map((item) => {
      item.map((input) => {
        this.state[input.property] = null;
      });
    });

    this.state.currentPart = [];
  }

  showFormPart = (i) => {
    const formInputsArray = [];

    this.props.items[i].map((input, j) => {
      const inputOfType = {
        intNumber: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            keyboardType="numeric"
          />
        ),
        name: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCapitalize="words"
            textContentType="name"
          />
        ),
        username: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType="username"
            textContentType="username"
          />
        ),
        email: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        ),
        password: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType="password"
            textContentType="password"
          />
        ),
        date: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => his.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
          />
        ),
      };

      const inputItem = (
        <View style={{ width: "100%" }} key={`form-input-${i}-${j}`}>
          {inputOfType[input.valueType]}
        </View>
      );

      formInputsArray.push(inputItem);
    });

    const formPart = <View style={[Style.column_100]}>{formInputsArray}</View>;

    this.setState({ currentPart: formPart });
  };

  toPreviousPart = () => {
    if (this.currentPart !== 0) {
      this.currentPart--;
      this.showFormPart(this.currentPart);
    }
  };

  toNextPart = () => {
    if (this.currentPart !== this.numItems - 1) {
      if (this.validator()) {
        this.currentPart++;
        this.showFormPart(this.currentPart);
      }
    }
  };

  isEmpty = (value) => {
    return value === null || value === '' || value === ' ' ? true : false ;
  }

  sendData = () => {
    if (this.validator()) {
      console.log("Sending new user...");
    }
  };

  validator = () => {
    const data = Object.assign({}, this.state);
    delete data["currentPart"];
    
    this.props.items.map((item) => {
      const requiredEmptyInputs = [];
      const minLengthInputs = [];
      
      item.map((input) => {
        const inputValue = data[input.property];

        if (input.validations.isRequired && this.isEmpty(inputValue)) {
          requiredEmptyInputs.push(input.label);
        }
        
        if (input.validations.hasMinLengthOf && input.validations.hasMinLengthOf < inputValue?.length) {
          minLengthInputs.push(input.label);
        }

        if (input.validations.isMatchWith && data[input.validations.isMatchWith] !== inputValue) {
          ToastAndroid.show(`The property ${input.label} isMatchWith failed!`, ToastAndroid.LONG);
          return false;
        }
      });

      if (requiredEmptyInputs.length >= 1) {
        ToastAndroid.show(`The properties ${requiredEmptyInputs.join(', ')} isRequired failed!`, ToastAndroid.LONG);
        return false;
      }else if (minLengthInputs.length >= 1) {
        ToastAndroid.show(`The properties ${minLengthInputs.join(', ')} minLengthOf failed!`, ToastAndroid.LONG);
        return false;
      }
      
      return true;
    });

    return true;
  }

  componentDidMount() {
    this.showFormPart(0);
  }

  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        pagingEnabled
        style={{ width: "100%" }}
      >
        <View style={Style.formPartView}>
          <View style={Style.row}>{this.state.currentPart}</View>
          <View
            style={[
              Style.row,
              Style.btnContainer,
              { justifyContent: "space-between" },
            ]}
          >
            <TouchableOpacity
              style={[
                Style.btn,
                { width: "47%" },
                this.currentPart === 0 ? Style.btnDisabled : Style.btnSecondary,
              ]}
              onPress={this.currentPart === 0 ? () => {} : this.toPreviousPart}
            >
              <Text
                style={[
                  Style.btnText,
                  this.currentPart === 0 ? Style.btnDisabledText : {},
                ]}
              >
                Prev
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Style.btn,
                this.currentPart !== this.numItems - 1
                  ? Style.btnSecondary
                  : Style.btnPrimary,
                { width: "47%" },
              ]}
              onPress={
                this.currentPart !== this.numItems - 1
                  ? this.toNextPart
                  : this.sendData
              }
            >
              <Text style={Style.btnText}>
                {this.currentPart !== this.numItems - 1 ? "Next" : this.props.lastBtnCaption}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
