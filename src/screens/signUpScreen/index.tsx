import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../utils/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {regexName,regexEmail,regexPhoneNo,regexPassword,} from '../../utils/regex';
import {styles} from './style';
import {STRINGS} from '../../utils/strings';

export default function SignUpScreen({navigation}: any) {
  const [checkUncheck, setCheckUncheck] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [phoneNoError, setphoneNoError] = useState('');
  const [name, setName] = useState('');
  const [nameValidError, setNameValidError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validName = (val: any) => {
    if (val.length === 0) {
      setNameValidError('Please Enter a valid name');
    } else if (regexName.test(val) === false) {
      setNameValidError('Name should be min of 3 characters');
    } else if (regexName.test(val) === true) {
      setNameValidError('');
    }
  };

  const handleValidPhoneNo = (val: any) => {
    if (val.length === 0) {
      setphoneNoError('Mobile Number must be enter');
    } else if (regexPhoneNo.test(val) == false) {
      setphoneNoError('Mobile Number must contain 10 digits.');
    } else if (regexPhoneNo.test(val) == true) {
      setphoneNoError('');
    }
  };

  const handleValidEmail = (val: any) => {
    if (val.length === 0) {
      setEmailValidError('Email address must be enter');
    } else if (regexEmail.test(val) === false) {
      setEmailValidError('Please enter a valid email.');
    } else if (regexEmail.test(val) === true) {
      setEmailValidError('');
    }
  };

  const handlePassword = (val: any) => {
    if (val.length === 0) {
      setPasswordError('Password must be enter');
    } else if (regexPassword.test(val) === false) {
      setPasswordError(
        'Password must contain minimum 8 characters,1 uppercase,1lowercase,1 number, 1 Special Character.',
      );
    } else if (regexPassword.test(val) === true) {
      setPasswordError('');
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <Image source={images.backarrow} style={styles.backArrowStyle} />
      <Text style={styles.createTextStyle}>{STRINGS.LABEL.CREATE_ACCOUNT}</Text>
      <Text style={styles.taglineStyle}>{STRINGS.LABEL.SIGN_UP_TAGLINE}</Text>
      <KeyboardAwareScrollView>
        <View style={styles.textInputStyle}>
          <CustomTextInput
            label={STRINGS.LABEL.FULL_NAME}
            value={name}
            onChangeText={value => {
              setName(value);
              validName(value);
            }}
          />
          {nameValidError ? (
            <Text style={styles.validErrorStyle}>{nameValidError}</Text>
          ) : null}
          <CustomTextInput
            keyboardType={'number-pad'}
            label={STRINGS.LABEL.MOBILE_NUMBER}
            value={phoneNo}
            onChangeText={value => {
              setPhoneNo(value);
              handleValidPhoneNo(value);
            }}
          />
          {phoneNoError ? (
            <Text style={styles.validErrorStyle}>{phoneNoError}</Text>
          ) : null}
          <CustomTextInput
            label={STRINGS.LABEL.EMAIL}
            value={email}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
          {emailValidError ? (
            <Text style={styles.validErrorStyle}>{emailValidError}</Text>
          ) : null}
          <CustomTextInput
            label={STRINGS.LABEL.PASSWORD}
            placeholder={STRINGS.LABEL.PASSWORD}
            value={password}
            securetextentry={true}
            onChangeText={(value: any) => {
              setPassword(value);
              handlePassword(value);
            }}
          />
          {passwordError ? (
            <Text style={styles.validErrorStyle}>{passwordError}</Text>
          ) : null}
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.CheckBoxTouchable}
            activeOpacity={0.5}
            onPress={() => {
              setCheckUncheck(!checkUncheck);
            }}>
            {checkUncheck ? (
              <Image style={styles.checkboxStyle} source={images.correct} />
            ) : (
              <Image style={styles.checkboxStyle} source={images.checkbox} />
            )}
          </TouchableOpacity>
          <View style={styles.AgreeTermsViewStyle}>
            <Text style={styles.agreeStyle}>{STRINGS.LABEL.AGREE_TO}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('TermsScreen')}>
              <Text style={styles.termsButtonStyle}>
                {STRINGS.LABEL.TERMS_TEXT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.createButtonTouchable}
          onPress={() => navigation.navigate('OtpVerify')}>
          <Text style={styles.createButtonStyle}>
            {STRINGS.LABEL.CREATE_ACCOUNT}
          </Text>
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
            {STRINGS.LABEL.ALREADY_USER}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.signInButtonStyle}>
              {STRINGS.LABEL.SIGN_IN}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
