import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Style } from '../../tools';
import FormValidator from './FormValidator';
import FormInput from './FormInput';

export default class FormMultipartComponent extends Component {
  currentPosition = 0;
  numItems = this.props.items.length;
  isMultipart = false;

  state = {
    currentPosition: []
  }
  
  constructor(props) {
    super(props);
    this.isMultipart = this.props.items[0][0] != undefined;
  }

  showCurrentFormPart() {
    const form = [];
    
    if (this.isMultipart) {
      this.props.items[this.currentPosition].map((item, inputIndex) => {
        const input = (
          <View style={{ width: '100%' }} key={`form-control-${this.currentPosition}-${inputIndex}`}>
            <FormInput control={item} />
          </View>
        );
  
        form.push(input);
      });
    } else {
      this.props.items.map((item, inputIndex) => {
        const input = (
          <View style={{ width: '100%' }} key={`form-control-${this.currentPosition}-${inputIndex}`}>
            <FormInput control={item} />
          </View>
        );
  
        form.push(input);
      });
    }    

    const currentFormPart = <View style={[Style.column_100]}>{form}</View>;

    this.setState({ currentFormPart });
  }

  getFormData() {
    const data = {}

    if (this.isMultipart) {
      this.props.items.map(form => {
        form.map(control => {
          if (!control.notToSubmit) {
            data[control.property] = control.value;
          }
        });
      });
    } else {
      this.props.items.map(control => {
        if (!control.notToSubmit) {
          data[control.property] = control.value;
        }
      });
    }    

    return data;
  }

  onSubmit() {
    const data = this.getFormData();
    const formIsValid = this.formIsValid();
    return formIsValid ? data : null;
  }

  formIsValid() {
    let form = null;
    if (this.isMultipart) {
      form = this.props.items[this.currentPosition];
    } else {
      form = this.props.items;
    }
    return new FormValidator(form).formIsValid();    
  }

  toPreviousPart = () => {
    if (this.currentPosition !== 0) {
      this.currentPosition--;
      this.showCurrentFormPart();
    }
  }

  toNextPart = () => {
    const formIsValid = this.formIsValid();
    if (this.currentPosition !== this.numItems - 1 && formIsValid) {
      this.currentPosition++;
      this.showCurrentFormPart();
    }
  }

  componentDidMount() {
    this.showCurrentFormPart();
  }

  render() {
    return (
      <ScrollView vertical showsVerticalScrollIndicator={false} pagingEnabled style={{ width: '100%' }}>
        <View style={Style.formPartView}>
          <View style={Style.row}>{this.state.currentFormPart}</View>
          {this.isMultipart &&
          <View style={[Style.row, Style.btnContainer, { justifyContent: 'space-between' }]}>
            <TouchableOpacity style={[Style.btn, this.currentPosition === 0 ? Style.btnDisabled : Style.btnSecondary, { width: '47%' }]}
              onPress={this.currentFormPartPosition === 0 ? () => { } : this.toPreviousPart}>
              <Text style={[Style.btnText, this.currentFormPartPosition === 0 ? Style.btnDisabledText : {}]}>Prev</Text>
            </TouchableOpacity>
            {this.currentPosition !== this.numItems - 1 &&
              <TouchableOpacity style={[Style.btn, Style.btnSecondary, { width: '47%' }]} onPress={this.toNextPart}>
                <Text style={Style.btnText}>Next</Text>
              </TouchableOpacity>}
            {this.currentPosition === this.numItems - 1 &&
              <TouchableOpacity style={[Style.btn, Style.btnPrimary, { width: '47%' }]} onPress={() => this.props.onSubmit(this.onSubmit())}>
                <Text style={Style.btnText}>{this.props.submitBtnCaption}</Text>
              </TouchableOpacity>}
          </View>}
          {!this.isMultipart &&
          <View style={[Style.row, Style.btnContainer, { justifyContent: 'space-between' }]}>
            <TouchableOpacity style={[Style.btn, Style.btnPrimary, { width: '100%' }]} onPress={() => this.props.onSubmit(this.onSubmit())}>
              <Text style={Style.btnText}>{this.props.submitBtnCaption}</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </ScrollView>
    );
  }
}
