import React from 'react';
import { View, Text } from 'react-native';
import { Style } from '../tools';
import Theme from '../theme/theme';
// import HttpService from '../service';
import FormMultiparts from '../components/Forms/FormMultiparts';
import ImagePicker from '../components/ImagePicker';
import { useState } from 'react';
import RegisterForm from '../forms/register-form';

const form =  [
  {
    property: 'firstName',
    label: 'First name',
    value: 'Enmanuel',
    type: 'name',
    validations: {
      isRequired: true,
    }
  },
  {
    property: 'secondName',
    label: 'Second name',
    value: null,
    type: 'name',
    validations: null
  },
  {
    property: 'firstSurname',
    label: 'First surname',
    value: 'Balcacer',
    type: 'name',
    validations: {
      isRequired: true,
    }
  },
  {
    property: 'secondSurname',
    label: 'Second surname',
    value: 'Fajardo',
    type: 'name',
    validations: null
  }
];

const SignUpScreen = ({ navigation }) => {
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

    navigation.navigate('Home');
  }
  
  return (
    <View style={[Style.screen, { paddingTop: 80 }]}>
      <Text style={{ color: Theme.colorPrimary, fontSize: 34, fontFamily: 'Louis George Cafe Bold' }}>Sign Up</Text>
      <View style={{ paddingTop: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImagePicker onSelectImage={(img) => setUserImg(img)} />
        <FormMultiparts items={RegisterForm} submitBtnCaption='Sign Up' onSubmit={data => signUp(data)} />
      </View>
    </View>
  );
}

export default SignUpScreen;
