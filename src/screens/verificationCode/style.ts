import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  body: {
    marginTop: normalize(20),
  },
  textInputStyle: {
    height: normalize(48),
    width: normalize(64),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    color: '#44C2E3',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: normalize(20),
  },
  backArrowStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(20),
    marginBottom: normalize(20),
    resizeMode: 'contain',
  },
  verificationTextStyle: {
    width: normalize(292),
    height: normalize(32),
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: normalize(24),
    color: COLOR.WHITE,
  },
  editButtonStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.BLUE,
    paddingHorizontal: normalize(10),
  },
  taglineStyle: {
    fontSize: 14,
    fontWeight: '400',
    width: normalize(326),
    height: normalize(20),
    marginLeft: normalize(24),
    color: COLOR.WHITE,
  },
  SubmitButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: normalize(325),
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: normalize(25),
    marginTop: normalize(30),
    height: normalize(48),
  },
  SubmitButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: normalize(20),
    top: normalize(10),
    fontStyle: 'italic',
  },
  notReceivedTextStyle: {
    marginTop: normalize(40),
    color: COLOR.WHITE,
    marginLeft: normalize(20),
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
    color: COLOR.BLACK,
    marginBottom: normalize(30),
  },
  bmxImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  bmxView: {
    height: normalize(364),
    width: normalize(333),
    marginTop: normalize(15),
  },
  footerImgStyle: {
    height: normalize(71),
    width: normalize(375),
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  numberTextStyle: {
    color: COLOR.WHITE,
    marginBottom: normalize(20),
    marginLeft: normalize(24),
  },

  SubmitButtonTouchableinactive: {
    backgroundColor: '#282828',
    width: normalize(325),
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: normalize(25),
    marginTop: normalize(30),
    height: normalize(48),
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: normalize(64),
    height: normalize(48),
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
