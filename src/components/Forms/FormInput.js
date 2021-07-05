import React from 'react';
import { TextInput } from 'react-native';
import { Style } from '../../tools';
import Theme from '../../theme/theme';
import DateInput from './Inputs/DateInput';

export default function FormInput({ control }) {
    const input = {
        number: (
            <TextInput
                style={Style.input}
                onChangeText={value => control.value = value}
                defaultValue={control.value}
                value={control.value}
                placeholderTextColor={Theme.colorInputsPlaceholder}
                placeholder={control.label}
                keyboardType='numeric'
            />
        ),
        name: (
            <TextInput
                style={Style.input}
                onChangeText={value => control.value = value}
                defaultValue={control.value}
                value={control.value}
                placeholderTextColor={Theme.colorInputsPlaceholder}
                placeholder={control.label}
                autoCapitalize='words'
                textContentType='name'
            />
        ),
        username: (
            <TextInput
                style={Style.input}
                onChangeText={value => control.value = value}
                defaultValue={control.value}
                value={control.value}
                placeholderTextColor={Theme.colorInputsPlaceholder}
                placeholder={control.label}
                autoCompleteType='username'
                textContentType='username'
            />
        ),
        email: (
            <TextInput
                style={Style.input}
                onChangeText={value => control.value = value}
                defaultValue={control.value}
                value={control.value}
                placeholderTextColor={Theme.colorInputsPlaceholder}
                placeholder={control.label}
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address'
            />
        ),
        password: (
            <TextInput
                style={Style.input}
                onChangeText={value => control.value = value}
                defaultValue={control.value}
                value={control.value}
                placeholderTextColor={Theme.colorInputsPlaceholder}
                placeholder={control.label}
                textContentType='password'
                secureTextEntry
            />
        ),
        date: (
            <DateInput 
                value={control.value}
                label={control.label}
                onChangeDate={value => control.value = value}
            />
        )
    };

    return input[control.type];
}
