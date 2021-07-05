import React, { useState } from 'react';
import { Style } from '../../../tools';
import Theme from '../../../theme/theme';
import { TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = (props) => {

  const getDate = (position) => {
    let dateValue = !!props.value ? props.value : new Date().toISOString().slice(0,10);
    const dateInfo = [];
    String(dateValue).split('-').map(d => {
      dateInfo.push(Number(d));
    });
    return dateInfo[position];
  } 
  
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(getDate(0), getDate(1) - 1, getDate(2)));
  

  const onChange = (d) => {
    setShow(false);
    if (d) setDate(d);
    props.onChangeDate(date.toISOString().slice(0,10));
  }

  return (
    <>
      {show &&
        <DateTimePicker
          value={date}
          mode="date"
          dateFormat="shortdate"
          onChange={(e,d) => onChange(d)}
        />
      }
      <TouchableOpacity onPress={() => setShow(true)} activeOpacity={1}>
        <TextInput
          style={Style.input}
          placeholderTextColor={Theme.colorInputsPlaceholder}
          placeholder={props.label}
          value={date.toISOString().slice(0,10)}
          editable={false}
          pointerEvents={'none'}
          onChangeText={(date) => props.onChangeDate(date)}
        />
      </TouchableOpacity>
    </>
  );
};

export default DateInput;