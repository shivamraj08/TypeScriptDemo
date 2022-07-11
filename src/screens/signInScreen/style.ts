import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  signInTextStyle: {
    width: normalize(281),
    height: normalize(56),
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginLeft: normalize(20),
    marginTop: normalize(96),
    color: COLOR.WHITE,
  },
  textInputView: {
    marginLeft: normalize(12),
    marginRight: normalize(12),
    marginTop: normalize(20),
  },
  forgetTextStyle: {
    color: '#44C2E3',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    marginRight: normalize(10),
    marginTop: normalize(5),
    marginBottom: normalize(20),
  },
  orViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(25),
    paddingHorizontal: normalize(18),
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
  lastViewSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(30),
    marginBottom: normalize(20),
  },
  alreadyTextStyle: {
    fontSize: 16,
    color: COLOR.WHITE,
    fontWeight: '600',
  },
  signUpButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLOR.BLUE,
    marginHorizontal: normalize(5),
    bottom: normalize(1),
  },
  edit: {
    height: normalize(45),
    width: normalize(30),
    justifyContent: 'center',
    position: 'absolute',
    right: normalize(10),
    top: normalize(10),
  },
  editImageStyle: {
    height: normalize(20),
    width: normalize(18),
    resizeMode: 'contain',
  },
  validErrorStyle: {
    color: COLOR.RED,
    fontSize: 12,
    height: normalize(15),
    maxWidth: normalize(289),
    bottom: normalize(4),
  },
  createButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: '93%',
    marginLeft: normalize(15),
    borderRadius: 5,
    borderWidth: 1,
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
});
