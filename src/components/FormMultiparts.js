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
  currentFormPartPosition = 0;
  numItems = this.props.items.length;

  constructor(props) {

    super(props);

    this.state = {}

    this.state.currentFormPart = [];
    
    this.props.items.map((item) => {
      item.map((input) => {
        this.state[input.property] = null;
      });
    });
  }

  showCurrentFormPart = () => {
    const formInputsArray = [];

    const formPartIndex = this.currentFormPartPosition;

    this.props.items[formPartIndex].map((input, inputIndex) => {
      const inputOfType = {
        int: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: Number(value) })}
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
            secureTextEntry
          />
        ),
        date: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
          />
        ),
      };

      const inputItem = (
        <View style={{ width: "100%" }} key={`form-input-${formPartIndex}-${inputIndex}`}>
          {inputOfType[input.valueType]}
        </View>
      );

      formInputsArray.push(inputItem);
    });

    const currentFormPart = <View style={[Style.column_100]}>{formInputsArray}</View>;

    this.setState({ currentFormPart });
  }

  onSubmit = () => {
    const data = Object.assign({}, this.state);
    delete data["currentFormPart"];
    
    return this.formIsValid(data) ? data : null;
  }

  formIsValid = (data) => {
    this.props.items.map((item) => {
      const requiredEmptyInputs = [];
      const minLengthInputs = [];
      const minValueInputs = [];
      const maxValueInputs = [];
      const matchWithInputs = [];
      
      item.map((input) => {
        const inputValue = data[input.property];

        if (input.validations) {
          if (input.validations.isRequired && this.isEmpty(inputValue)) {
            requiredEmptyInputs.push(input.label);
          }else if (input.validations.hasMinLengthOf && inputValue?.length < input.validations.hasMinLengthOf) {
            minLengthInputs.push(input.label);
          }else if (input.validations.hasMinValueOf && Number(inputValue) < input.validations.hasMinValueOf) {
            minValueInputs.push(input.label);
          }else if (input.validations.hasMaxValueOf && Number(inputValue) > input.validations.hasMaxValueOf) {
            maxValueInputs.push(input.label);
          }else if (input.validations.isMatchWith && data[input.validations.isMatchWith] !== inputValue) {
            matchWithInputs.push(input.label);
          }
        }
      });

      if (requiredEmptyInputs.length >= 1) {
        ToastAndroid.show(`The properties ${requiredEmptyInputs.join(', ')} isRequired failed!`, ToastAndroid.LONG);
        return false;
      }else if (minLengthInputs.length >= 1) {
        ToastAndroid.show(`The properties ${minLengthInputs.join(', ')} minLengthOf failed!`, ToastAndroid.LONG);
        return false;
      }else if (minValueInputs.length >= 1) {
        ToastAndroid.show(`The properties ${minValueInputs.join(', ')} minValueOf failed!`, ToastAndroid.LONG);
        return false;
      }else if (maxValueInputs.length >= 1) {
        ToastAndroid.show(`The properties ${maxValueInputs.join(', ')} maxValueOf failed!`, ToastAndroid.LONG);
        return false;
      }else if (matchWithInputs.length >= 1) {
        ToastAndroid.show(`The property ${matchWithInputs.join(', ')} isMatchWith failed!`, ToastAndroid.LONG);
        return false;
      }

      return true;
    });

    return true;
  }
  
  isEmpty = (value) => {
    return value === null || value === '' || value === ' ';
  }
  
  toPreviousPart = () => {
    if (this.currentFormPartPosition !== 0) {
      this.currentFormPartPosition--;
      this.showCurrentFormPart();
    }
  }

  toNextPart = () => {
    const data = Object.assign({}, this.state);
    delete data["currentFormPartPosition"];

    if (this.currentFormPartPosition !== this.numItems - 1 && this.formIsValid(data)) {
      this.currentFormPartPosition++;
      this.showCurrentFormPart();
    }
  }

  componentDidMount() {
    this.showCurrentFormPart();
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
          <View style={Style.row}>{this.state.currentFormPart}</View>
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
                this.currentFormPartPosition === 0 ? Style.btnDisabled : Style.btnSecondary,
              ]}
              onPress={this.currentFormPartPosition === 0 ? () => {} : this.toPreviousPart}
            >
              <Text
                style={[
                  Style.btnText,
                  this.currentFormPartPosition === 0 ? Style.btnDisabledText : {},
                ]}
              >
                Prev
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Style.btn,
                this.currentFormPartPosition !== this.numItems - 1
                  ? Style.btnSecondary
                  : Style.btnPrimary,
                { width: "47%" },
              ]}
              onPress={
                this.currentFormPartPosition !== this.numItems - 1
                  ? this.toNextPart
                  : this.props.onSubmit(this.onSubmit())
              }
            >
              <Text style={Style.btnText}>
                {this.currentFormPartPosition !== this.numItems - 1 ? "Next" : this.props.lastBtnCaption}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
