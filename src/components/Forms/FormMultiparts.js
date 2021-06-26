import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Style } from '../../tools';
import Theme from '../../theme/theme';
import FormValidator from './FormValidator';

export default class FormMultipartComponent extends Component {
  currentFormPartPosition = 0;
  numItems = this.props.items.length;

  constructor(props) {
    super(props);

    this.state = {}

    this.state.currentFormPart = [];

    this.props.items.map((item) => {
      item.map((input) => {
        this.state[input.property] = input.valueType === 'number' ? 0 : '';
      });
    });
  }

  showCurrentFormPart() {
    const formInputsArray = [];

    const formPartIndex = this.currentFormPartPosition;

    this.props.items[formPartIndex].map((input, inputIndex) => {
      const inputOfType = {
        number: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: Number(value) })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            keyboardType='numeric'
          />
        ),
        name: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCapitalize='words'
            textContentType='name'
          />
        ),
        username: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType='username'
            textContentType='username'
          />
        ),
        email: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType='email'
            textContentType='emailAddress'
            keyboardType='email-address'
          />
        ),
        password: (
          <TextInput
            style={Style.input}
            onChangeText={(value) => this.setState({ [input.property]: value })}
            value={this.state[input.property]}
            placeholderTextColor={Theme.colorInputsPlaceholder}
            placeholder={input.label}
            autoCompleteType='password'
            textContentType='password'
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
        <View style={{ width: '100%' }} key={`form-control-${formPartIndex}-${inputIndex}`}>
          {inputOfType[input.valueType]}
        </View>
      );

      formInputsArray.push(inputItem);
    });

    const currentFormPart = <View style={[Style.column_100]}>{formInputsArray}</View>;

    this.setState({ currentFormPart });
  }

  onSubmit() {
    const data = Object.assign({}, this.state);
    delete data['currentFormPart'];
    const formIsValid = this.formIsValid();

    return formIsValid ? data : null;
  }

  formIsValid() {
    const form = this.props.items[this.currentFormPartPosition];

    form.map(control => {
      control.value = this.state[control.property];
    });

    return new FormValidator(form).formIsValid();
  }

  toPreviousPart = () => {
    if (this.currentFormPartPosition !== 0) {
      this.currentFormPartPosition--;
      this.showCurrentFormPart();
    }
  }

  toNextPart = () => {
    const formIsValid = this.formIsValid();
    console.log(formIsValid);

    if (this.currentFormPartPosition !== this.numItems - 1 && formIsValid) {
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
        style={{ width: '100%' }}
      >
        <View style={Style.formPartView}>
          <View style={Style.row}>{this.state.currentFormPart}</View>
          <View
            style={[
              Style.row,
              Style.btnContainer,
              { justifyContent: 'space-between' },
            ]}
          >
            <TouchableOpacity
              style={[
                Style.btn,
                { width: '47%' },
                this.currentFormPartPosition === 0 ? Style.btnDisabled : Style.btnSecondary,
              ]}
              onPress={this.currentFormPartPosition === 0 ? () => { } : this.toPreviousPart}
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
            {this.currentFormPartPosition !== this.numItems - 1
              ? <TouchableOpacity
                style={[
                  Style.btn,
                  Style.btnSecondary,
                  { width: '47%' },
                ]}
                onPress={this.toNextPart}
              >
                <Text style={Style.btnText}>
                  Next
                </Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[
                  Style.btn,
                  Style.btnPrimary,
                  { width: '47%' },
                ]}
                onPress={this.props.onSubmit(this.onSubmit())}
              >
                <Text style={Style.btnText}>
                  {this.props.lastBtnCaption}
                </Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}
