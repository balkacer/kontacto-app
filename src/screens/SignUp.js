import React from 'react';
import { View, Text } from 'react-native';
import { Style } from '../tools';
import Theme from '../theme/theme';
import HttpService from '../service';
import FormMultiparts from '../components/Forms/FormMultiparts';
import ImagePicker from '../components/ImagePicker';
import { useState } from 'react';

const form = [
  [
    {
      property: 'firstName',
      label: 'First name',
      value: 'Gosh',
      type: 'name',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondName',
      label: 'Second name',
      value: 'Rap',
      type: 'name',
      validations: null
    },
    {
      property: 'firstSurname',
      label: 'First surname',
      value: 'God',
      type: 'name',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'secondSurname',
      label: 'Second surname',
      value: 'nop',
      type: 'name',
      validations: null
    }
  ],
  [
    {
      property: 'username',
      label: 'Username',
      value: 'makuttico',
      type: 'username',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'email',
      label: 'Email',
      value: 'enmh@mail.com',
      type: 'email',
      validations: {
        isRequired: true,
      }
    },
    {
      property: 'password',
      label: 'Pasword',
      value: '12345678',
      type: 'password',
      validations: {
        isRequired: true,
        hasMinLengthOf: 8
      }
    },
    {
      property: 'confirmPassword',
      label: 'Confirm Pasword',
      value: '12345678',
      type: 'password',
      notToSubmit: true,
      validations: {
        isMatchWith: 'password',
      }
    }
  ],
  [
    {
      property: 'work',
      label: 'Work Name',
      value: 'todo a 10',
      type: 'name',
      validations: null
    },
    {
      property: 'age',
      label: 'Age',
      value: '22',
      type: 'number',
      validations: {
        isRequiredd: true,
        hasMinValueOf: 10,
        hasMaxValueOf: 60
      }
    },
    {
      property: 'birthday',
      label: 'Birthday',
      value: '2021-07-25',
      type: 'date',
      validations: {
        isRequired: true
      }
    },
  ]
]

const SignUpScreen = () => {
  // const httpSv = new HttpService();
  const [userImg, setUserImg] = useState(null);

  const signUp = (user) => {
    if (user) {
      user.image = userImg;
      console.log(user);
    }

    // this.httpSv.post('user', user).then((res) => {
    //   ToastAndroid.show(res.message, ToastAndroid.SHORT);
    // }).catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT));
  }
  
  return (
    <View style={[Style.screen, { paddingTop: 80 }]}>
      <Text style={{ color: Theme.colorPrimary, fontSize: 34, fontFamily: 'Louis George Cafe Bold' }}>Sign Up</Text>
      <View style={{ paddingTop: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImagePicker onSelectImage={(img) => setUserImg(img)} />
        <FormMultiparts items={form} submitBtnCaption='Sign Up' onSubmit={data => signUp(data)} />
      </View>
    </View>
  );
}

export default SignUpScreen;
