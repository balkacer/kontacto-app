import React from 'react';
import { TextInput } from 'react-native';
import { Style } from '../../tools';
import Theme from '../../theme/theme';
import DateInput from './Inputs/DateInput';
import CheckInput from './Inputs/CheckInput';

export default function FormInput({ control }) {
    const input = {
        number: (
            <TextInput
                style={!control.isDisabled ? Style.input : Style.disabledInput}
                onChangeText={value => control.value = value}
                value={control.value}
                placeholderTextColor={!control.isDisabled ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
                placeholder={control.label}
                keyboardType='numeric'
                editable={!control.isDisabled}
            />
        ),
        name: (
            <TextInput
                style={!control.isDisabled ? Style.input : Style.disabledInput}
                onChangeText={value => control.value = value}
                value={control.value}
                placeholderTextColor={!control.isDisabled ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
                placeholder={control.label}
                autoCapitalize='words'
                textContentType='name'
                editable={!control.isDisabled}
            />
        ),
        username: (
            <TextInput
                style={!control.isDisabled ? Style.input : Style.disabledInput}
                onChangeText={value => control.value = value}
                value={control.value}
                placeholderTextColor={!control.isDisabled ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
                placeholder={control.label}
                autoCompleteType='username'
                textContentType='username'
                editable={!control.isDisabled}
            />
        ),
        email: (
            <TextInput
                style={!control.isDisabled ? Style.input : Style.disabledInput}
                onChangeText={value => control.value = value}
                value={control.value}
                placeholderTextColor={!control.isDisabled ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
                placeholder={control.label}
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address'
                editable={!control.isDisabled}
            />
        ),
        password: (
            <TextInput
                style={!control.isDisabled ? Style.input : Style.disabledInput}
                onChangeText={value => control.value = value}
                value={control.value}
                placeholderTextColor={!control.isDisabled ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
                placeholder={control.label}
                textContentType='password'
                secureTextEntry
                editable={!control.isDisabled}
            />
        ),
        date: (
            <DateInput 
                value={control.value}
                placeholder={control.label}
                editable={!control.isDisabled}
                onChangeDate={value => control.value = value}
            />
        ),
        check: (
            <CheckInput
                disabled={control.isDisabled}
                value={control.value}
                label={control.label}
                onValueChange={value => control.value = value}
            />
        )
    };

    return input[control.type];
}
