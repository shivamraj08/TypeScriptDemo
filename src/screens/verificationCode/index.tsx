import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import {images} from '../../utils/images';
import COLOR from '../../utils/color';

export default function VerificationScreen() {
  const first = useRef<any>(null);
  const second = useRef<any>(null);
  const third = useRef<any>(null);
  const fourth = useRef<any>(null);
  const [pin, setPin] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.backArrowStyle} source={images.backarrow} />
        <Text style={styles.verificationTextStyle}>
          {'Enter Verification Code'}
        </Text>
        <View>
          <Text style={styles.taglineStyle}>
            {'Kindly enter the 4 digit verification code sent to '}
          </Text>
        </View>
        <View style={styles.tagLineView}>
          <Text style={styles.numberTextStyle}>{'+17345678926'}</Text>
          <TouchableOpacity>
            <Text style={styles.editButtonStyle}>{'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.txtinp}
            ref={first}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              second.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={second}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              third.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={third}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              fourth.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={fourth}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              fourth.current.blur();
            }}
          />
        </View>
        {pin.length == 4 ? (
          <TouchableOpacity style={styles.SubmitButtonTouchable}>
            {<Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.SubmitButtonTouchableinactive}
            disabled={true}>
            {<Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>}
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.notReceivedTextStyle}>
            {"Didn't received the code yet?"}
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendButtonStyle}>
              {'Resend Verification Code'}
            </Text>
          </TouchableOpacity>
          <View>
            <View style={styles.bmxView}>
              <Image source={images.bmx} style={styles.bmxImg} />
            </View>
            <Image
              source={images.footerPattern}
              style={styles.footerImgStyle}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  txtinp: {
    height: 48,
    width: 64,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    // backgroundColor: COLOR.BLACK,
    color: '#44C2E3',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '900',
    marginTop:20
  },
  backArrowStyle: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  verificationTextStyle: {
    width: 292,
    height: 32,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: 24,
    color: COLOR.WHITE,
  },
  editButtonStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.BLUE,
    paddingHorizontal: 10,
  },
  taglineStyle: {
    fontSize: 14,
    fontWeight: '400',
    width: 326,
    height: 20,
    marginLeft: 24,
    color: COLOR.WHITE,
    marginTop:20
  },
  SubmitButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: 350,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 30,
    height: 48,
  },
  SubmitButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    top: 10,
    fontStyle: 'italic',
    // fontFamily:'Smooch'
  },
  notReceivedTextStyle: {
    marginTop: 40,
    color: 'white',
    marginLeft: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  resendButtonStyle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 5,
    color: COLOR.BLUE,
  },
  tagLineView: {
    flexDirection: 'row',
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'black',
  },
  bmxImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  bmxView: {
    height: 364,
    width: 333,
    marginTop: 25,
  },
  footerImgStyle: {
    height: 71,
    width: 375,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  numberTextStyle: {
    color: COLOR.WHITE,
    marginBottom: 20,
    marginLeft: 24,
  },

  SubmitButtonTouchableinactive: {
    backgroundColor: '#282828',
    width: 350,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 30,
    height: 48,
  },
});
