import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  createTextStyle: {
    width: normalize(195),
    height: normalize(32),
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: normalize(24),
    marginTop: normalize(20),
    color: COLOR.WHITE,
  },
  taglineStyle: {
    fontSize: 14,
    fontWeight: '400',
    width: normalize(145),
    height: normalize(16),
    marginLeft: normalize(24),
    color: COLOR.WHITE,
    marginBottom: normalize(20),
  },
  createButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: COLOR.BLACK,
    marginBottom: normalize(30),
    top: normalize(15),
    fontStyle: 'italic',
  },
  createButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: '93%',
    marginLeft: normalize(15),
    borderRadius: 5,
    borderWidth: 1,
  },
  textInputStyle: {
    marginLeft: normalize(20),
    marginRight: normalize(20),
  },
  agreeStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(10),
    marginBottom: normalize(15),
  },
  checkboxStyle: {
    height: normalize(20),
    width: normalize(20),
  },
  checkBoxView: {
    flexDirection: 'row',
    marginTop: normalize(2),
  },
  lineStyle: {
    flex: 1,
    height: normalize(1),
    backgroundColor: 'grey',
  },
  orTextStyle: {
    textAlign: 'center',
    color: COLOR.DARK_GREY,
  },
  termsButtonStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.BLUE,
    left: normalize(5),
    bottom: normalize(2),
  },
  orViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(25),
    paddingHorizontal: normalize(18),
  },
  googleButton: {
    height: normalize(50),
    width: '90%',
    top: normalize(20),
    margin: 10,
    borderRadius: 7,
    borderWidth: 1,
    right: normalize(12),
    left: normalize(12),
  },
  alreadyTextStyle: {
    fontSize: 16,
    color: COLOR.WHITE,
    fontWeight: '600',
  },
  signInButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLOR.BLUE,
    marginHorizontal: normalize(5),
    bottom: normalize(1),
  },
  lastViewSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(30),
    marginBottom: normalize(20),
  },
  backArrowStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(20),
    marginTop: normalize(60),
  },
  CheckBoxTouchable: {
    height: normalize(20),
    width: normalize(20),
    marginBottom: normalize(10),
    marginLeft: normalize(20),
  },
  AgreeTermsViewStyle: {
    flexDirection: 'row',
    marginTop: normalize(3),
  },
  validErrorStyle: {
    color: COLOR.RED,
    fontSize: 12,
    height: normalize(15),
    maxWidth: normalize(289),
    bottom: normalize(4),
  },
  edit: {
    height: normalize(45),
    width: normalize(30),
    justifyContent: 'center',
    position: 'absolute',
    right: normalize(10),
    top: normalize(10),
  },
  eyeImageStyle: {
    height: normalize(20),
    width: normalize(18),
    resizeMode: 'contain',
  },
  countryStyleModal: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
  countryTouchStyle: {
    top: normalize(25),
    borderRightWidth: 1,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: normalize(10),
    width: 66,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  selectedCountry: {
    color: COLOR.WHITE,
    fontSize: 15,
    bottom: normalize(3),
    fontWeight: '800',
  },
  downImgStyle: {
    height: normalize(10),
    width: normalize(10),
    resizeMode: 'contain',
  },
  lineImgStyle: {
    height: normalize(20),
    width: normalize(2),
    resizeMode: 'contain',
    bottom: normalize(4),
  },
  mobileTextView: {
    width: 350,
    left: 0,
  },
});
