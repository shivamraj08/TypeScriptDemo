import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React from 'react';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../utils/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  regexName,
  regexEmail,
  regexPhoneNo,
  regexPassword,
} from '../../utils/regex';
import {styles} from './style';
import {STRINGS} from '../../utils/strings';
import {useDispatch, useSelector} from 'react-redux';
import Api_SignUp from './action';
import CustomButton from '../../component/customButton';
import COLOR from '../../utils/color';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const [checkUncheck, setCheckUncheck] = React.useState(false);
  const [email, setEmail] = React.useState<any>('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [phoneNoError, setphoneNoError] = React.useState('');
  const [name, setName] = React.useState('');
  const [nameValidError, setNameValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [hiddenPassword, showPassword] = React.useState(true);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const {sign_Up_Data} = useSelector((store: any) => store.SignUpReducer);

  const Sign_Up_Api_Hit = () => {
    dispatch(
      Api_SignUp(
        name,
        email,
        password,
        phoneNo,
        (resp: any) => {
          if (resp?.data?.statusCode == 200) {
            navigation.navigate('OtpVerify', {PhoneNo: phoneNo});
          }
        },
        (error: any) => {
          Alert.alert('axiosError', error);
        },
      ),
    );
  };

  const handle = () => {
    if (
      nameValidError.length > 0 &&
      emailValidError.length > 0 &&
      phoneNoError.length > 0 &&
      passwordError.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  const validName = (val: any) => {
    let errorMsg = '';
    if (val.length === 0) {
      errorMsg = 'Name should be min of 3 characters';
    } else if (regexName.test(val) === false) {
      errorMsg = 'Please Enter a valid name';
    } else if (regexName.test(val) === true) {
      errorMsg = '';
    }
    setNameValidError(errorMsg);
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

  const termScreen = () => {
    navigation.navigate('TermsScreen');
  };

  const signInScreen = () => {
    navigation.navigate('signInScreen');
  };
  const onChangeTextName = (value: any) => {
    setName(value);
    validName(value);
  };
  const onChangeTextPhone = (value: any) => {
    setPhoneNo(value);
    handleValidPhoneNo(value);
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

  return (
    <View style={styles.signUpContainer}>
      <Image source={images.backarrow} style={styles.backArrowStyle} />
      <Text style={styles.createTextStyle}>{STRINGS.LABEL.CREATE_ACCOUNT}</Text>
      <Text style={styles.taglineStyle}>{STRINGS.LABEL.SIGN_UP_TAGLINE}</Text>
      <KeyboardAwareScrollView>
        <View style={styles.textInputStyle}>
          <CustomTextInput
            label={STRINGS.LABEL.FULL_NAME}
            value={name}
            onChangeText={onChangeTextName}
          />
          <Text style={styles.validErrorStyle}>
            {nameValidError ? nameValidError : null}
          </Text>
          <CustomTextInput
            keyboardType={'number-pad'}
            label={STRINGS.LABEL.MOBILE_NUMBER}
            value={phoneNo}
            onChangeText={onChangeTextPhone}
          />
          <Text style={styles.validErrorStyle}>
            {phoneNoError ? phoneNoError : null}
          </Text>
          <CustomTextInput
            label={STRINGS.LABEL.EMAIL}
            value={email}
            onChangeText={onChangeTextEmail}
          />
          <Text style={styles.validErrorStyle}>
            {emailValidError ? emailValidError : null}
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
                  style={styles.eyeImageStyle}
                  source={hiddenPassword! ? images.eyeClosed : images.eyeOpen}
                />
              </TouchableOpacity>
            )}
          />
          <Text style={styles.validErrorStyle}>
            {passwordError ? passwordError : null}
          </Text>
        </View>
        <View style={styles.checkBoxView}>
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
            <TouchableOpacity activeOpacity={0.5} onPress={termScreen}>
              <Text style={styles.termsButtonStyle}>
                {STRINGS.LABEL.TERMS_TEXT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={Sign_Up_Api_Hit}
          disabled={!handle}
          style={
            !handle()
              ? {
                  ...styles.createButtonTouchable,
                  backgroundColor: COLOR.DARK_GREY,
                }
              : styles.createButtonTouchable
          }>
          <Text style={styles.createButtonStyle}>
            {STRINGS.LABEL.CREATE_ACCOUNT.toUpperCase()}
          </Text>
        </TouchableOpacity>
        {/* <CustomButton label={"CREATE ACCOUNT"} onPress={Sign_Up_Api_Hit}  
        /> */}
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
          <TouchableOpacity onPress={signInScreen}>
            <Text style={styles.signInButtonStyle}>
              {STRINGS.LABEL.SIGN__IN}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
