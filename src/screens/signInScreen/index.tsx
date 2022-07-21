import {Text, TouchableOpacity, View, Image, Alert} from 'react-native';
import React, { useDebugValue } from 'react';
import COLOR from '../../utils/color';
import CustomTextInput from '../../component/customTextInput';
import CustomButton from '../../component/customButton';
import {STRINGS} from '../../utils/strings';
import {images} from '../../utils/images';
import {regexEmail, regexPassword, regexPhoneNo} from '../../utils/regex';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { Api_SignIn } from './action';

export default function SignInScreen() {
  const [email, setEmail] = React.useState<any>('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [phoneNoError, setphoneNoError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hiddenPassword, showPassword] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const {Sign_In_Data} = useSelector((store: any) => store.SignInReducer);

  const handleValidEmail = (val: any) => {
    let errorMsg = '';
    if (val.length === 0) {
      errorMsg = 'Email address must be enter';
    } else if (regexEmail.test(val) === false) {
      errorMsg = 'Email address must be enter';
    } else if (regexEmail.test(val) === true) {
      errorMsg = '';
    }
    setEmailValidError(errorMsg);
  };

  const handlePassword = (val: any) => {
    let errorMsg = '';
    if (val.length === 0) {
      errorMsg = 'Password must be enter';
    } else if (regexPassword.test(val) === false) {
      errorMsg = 'Password must contain minimum 8 characters.';
    } else if (regexPassword.test(val) === true) {
      errorMsg = '';
    }
    setPasswordError(errorMsg);
  };

  const handleValidPhoneNo = (val: any) => {
    let errorMsg = '';
    if (val.length === 0) {
      errorMsg = 'Mobile Number must be enter';
    } else if (regexPhoneNo.test(val) == false) {
      errorMsg = 'Mobile Number must contain 10 digits.';
    } else if (regexPhoneNo.test(val) == true) {
      errorMsg = '';
    }
    setphoneNoError(errorMsg);
  };
  const onChangeTextEmail = (value: any) => {
    setEmail(value);
    handleValidEmail(value);
  };
  
  const onChangeTextPassword = (value: any) => {
    setPassword(value);
    handlePassword(value);
  };

  const toggle = () => {
    showPassword(!hiddenPassword);
  };
  const Sign_In_Api_Hit = () => {
    dispatch(
      Api_SignIn(
        phoneNo,
        password,
        (response: any) => {
          if (response?.data?.statusCode === 200) {
            Alert.alert('Sign In Successfully');
          }
        },
        (errorAPI: any) => {
          Alert.alert('invalid id');
        },
      ),
    );
  };

  const handleSignInButton = () => {
    if (
      phoneNo.length > 0 &&
      phoneNoError == '' &&
      password.length > 0 &&
      passwordError == ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeTextPhone = (value: any) => {
    setPhoneNo(value.trim());
    handleValidPhoneNo(value.trim());
  };

  const signUpScreen = () => {
    navigation.navigate('SignupProfile');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signInTextStyle}>{STRINGS.LABEL.SIGN_IN_HEADER}</Text>
      <View style={styles.textInputView}>
        <CustomTextInput
          label={STRINGS.LABEL.MOBILE_NUMBER}
          value={phoneNo}
          onChangeText={onChangeTextPhone}
          maxLength={10}
        />
        <Text style={styles.validErrorStyle}>
          {phoneNoError ? phoneNoError : null}
        </Text>
        <CustomTextInput
          label={STRINGS.LABEL.PASSWORD}
          placeholder={STRINGS.LABEL.PASSWORD}
          value={password}
          securetextentry={hiddenPassword}
          onChangeText={onChangeTextPassword}
          right={() => (
            <TouchableOpacity onPress={toggle} style={styles.edit}>
              <Image
                style={styles.editImageStyle}
                source={hiddenPassword! ? images.eyeClosed : images.eyeOpen}
              />
            </TouchableOpacity>
          )}
        />
        <Text style={styles.validErrorStyle}>
          {passwordError ? passwordError : null}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgetTextStyle}>
          {STRINGS.LABEL.FORGET_PASSWORD}
        </Text>
      </TouchableOpacity>
      {/* <CustomButton label={STRINGS.LABEL.SIGN_IN} /> */}
      <TouchableOpacity
      onPress={Sign_In_Api_Hit}
        activeOpacity={0.6}
        disabled={!handleSignInButton}
        style={
          !handleSignInButton()
            ? {
                ...styles.createButtonTouchable,
                backgroundColor: COLOR.DARK_GREY,
              }
            : styles.createButtonTouchable
        }>
        <Text style={styles.createButtonStyle}>{STRINGS.LABEL.SIGN_IN}</Text>
      </TouchableOpacity>
      <View style={styles.orViewStyle}>
        <View style={styles.lineStyle} />
        <Text style={styles.orTextStyle}>{STRINGS.LABEL.OR}</Text>
        <View style={styles.lineStyle} />
      </View>
      <TouchableOpacity activeOpacity={0.3}>
        <Image source={images.google} style={styles.googleButton} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.3}>
        <Image source={images.apple} style={styles.googleButton} />
      </TouchableOpacity>
      <View style={styles.lastViewSignIn}>
        <Text style={styles.alreadyTextStyle}>
          {STRINGS.LABEL.I_AM_NEW_USER}
        </Text>
        <TouchableOpacity onPress={signUpScreen}>
          <Text style={styles.signUpButtonStyle}>{STRINGS.LABEL.SIGN_UP}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
