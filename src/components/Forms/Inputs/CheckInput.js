import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CheckInput = ({ disabled, value, onValueChange = (v) => v, label }) => {
    const [currentValue, setCurrentValue] = useState(value);
    return (
        <TouchableOpacity
            onPress={() => { if (!disabled) setCurrentValue(!currentValue) }}
            style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}
            activeOpacity={disabled ? 1 : 0.5}>
            <Text style={{opacity: !disabled ? 1 : 0.5}}>{label}</Text>
            <CheckBox
                disabled={disabled}
                value={currentValue}
                onValueChange={(newValue) => onValueChange(newValue)}
            />
        </TouchableOpacity>
    )
}

export default CheckInput;