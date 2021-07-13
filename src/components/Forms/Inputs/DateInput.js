import React, { useState } from 'react';
import { Style } from '../../../tools';
import Theme from '../../../theme/theme';
import { TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ value, placeholder, onChangeDate = (d) => d }, editable) => {

  const getDate = (position) => {
    let dateValue = !!value ? value : new Date().toISOString().slice(0,10);
    const dateInfo = [];
    String(dateValue).split('-').map(d => {
      dateInfo.push(Number(d));
    });
    return dateInfo[position];
  } 
  
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(getDate(0) ? new Date(getDate(0), getDate(1) - 1, getDate(2)) :  new Date());
  

  const onChange = (d) => {
    setShow(false);
    if (d) {
      setDate(d);
      onChangeDate(d.toISOString().slice(0,10));
    }
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
      <TouchableOpacity onPress={() => setShow(editable)} activeOpacity={1}>
        <TextInput
          style={editable ? Style.input : Style.disabledInput}
          placeholderTextColor={editable ? Theme.colorInputsPlaceholder : Theme.colorInputsPlaceholderDisabled}
          placeholder={placeholder}
          value={date.toISOString().slice(0,10)}
          editable={false}
          pointerEvents={'none'}
        />
      </TouchableOpacity>
    </>
  );
};

export default DateInput;