import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  imgContainer: {
    height: normalize(310),
    width: normalize(368),
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  imgCover: {
    width: normalize(358),
    height: normalize(218),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    bottom: normalize(20),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    width: normalize(101),
    height: normalize(101),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    bottom: normalize(10),
    borderRadius: 5,
  },
  imgProfileSelected: {
    width: normalize(100),
    height: normalize(100),
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: '900',
    color: COLOR.WHITE,
    marginLeft: normalize(15),
    marginTop: normalize(40),
    fontStyle: 'italic',
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
    color: COLOR.WHITE,
    fontSize: 15,
    height: normalize(20),
    maxWidth: normalize(289),
  },
  RightArrowImageStyle: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    right: normalize(5),
  },
  calendarImageStyle: {
    height: normalize(18),
    width: normalize(20),
    resizeMode: 'contain',
  },
  submitText: {
    fontSize: 30,
    fontWeight: '400',
    backgroundColor: COLOR.BLACK,
  },
  body: {
    borderRadius: 1,
    borderWidth: 1,
  },
  cameraImg: {
    height: normalize(26),
    position: 'absolute',
    width: normalize(26),
    resizeMode: 'contain',
    alignSelf: 'center',
    opacity: 0.6,
  },
  profileCameraImg: {
    height: normalize(22),
    width: normalize(22),
    position: 'absolute',
    alignSelf: 'center',
    marginTop: normalize(39),
    right: normalize(37),
    opacity: 0.6,
  },
  selectView: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLOR.WHITE,
    marginTop: normalize(10),
    flexDirection: 'row',
    height: normalize(48),
    marginBottom: normalize(20),
    justifyContent: 'space-between',
    paddingHorizontal: normalize(18),
    alignItems: 'center',
    paddingVertical: normalize(10),
  },
  selectIdentityText: {
    color: COLOR.BLUE ,
    fontSize: 16,
    fontWeight: '900',
  },
  selectedCoverImage: {
    width: normalize(358),
    height: normalize(218),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.WHITE,
  },
  touchableImagePickerStyle: {
    position: 'absolute',
    top: normalize(190),
    left: normalize(40),
  },
  customTextView: {
    marginLeft: normalize(15),
    marginRight: normalize(15),
  },
  SubmitButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: COLOR.BLACK,
    marginBottom: normalize(25),
    top: normalize(10),
    fontStyle: 'italic',
  },
  SubmitButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: '93%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: normalize(15),
  },
  ModalViewStyle: {
    marginTop: normalize(2),
    marginBottom: normalize(10),
  },
  touchableCalendarStyle: {
    height: normalize(50),
    width: '100%',
    marginTop: normalize(5),
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'flex-end',
    paddingRight: normalize(19),
  },
  identityView: {
    minHeight: normalize(48),
    width: normalize(346),
    borderWidth: 1,
    borderRadius: normalize(5),
    marginVertical: normalize(10),
    borderColor: COLOR.WHITE,
    padding: normalize(15),
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  identityTxt: {
    color: COLOR.BLUE,
    fontSize: 16,
    fontWeight: '800',
  },
  zipCodeStyleModal: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
  elementTouchStyle: {
    flexDirection: 'row',
    backgroundColor: 'light-Black',
    paddingHorizontal: normalize(10),
    justifyContent: 'space-around',
    borderRadius: normalize(5),
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  elementTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  crossImageStyle: {
    height: normalize(15),
    width: normalize(15),
    resizeMode: 'contain',
    marginHorizontal: normalize(10),
  },
  sportsView: {
    minHeight: normalize(48),
    width: normalize(346),
    borderWidth: 1,
    borderRadius: normalize(5),
    marginHorizontal: normalize(15),
    borderColor: COLOR.WHITE,
    padding: normalize(15),
    alignSelf: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(20),
    marginTop: normalize(10),
    flexDirection: 'row',
  },
  addNewButtonStyle: {
    color: COLOR.BLUE,
    height: normalize(20),
    width: normalize(100),
    margin: normalize(10),
    fontSize: 14,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  textInputStyle: {
    height: normalize(48),
    width: '100%',
    backgroundColor: COLOR.BLACK,
    marginBottom: normalize(10),
    fontWeight: '800',
  },
  errMsg: {
    fontSize: 12,
    color: COLOR.RED,
    fontWeight: '400',
  },
  alreadyUserName: {
    fontSize: 12,
    color: 'red',
    margin: 2,
    maxWidth: normalize(490),
    height: normalize(15),
  },
  userNameView: {
    flexDirection: 'row',
  },
  suggestionText: {
    color: COLOR.WHITE,
  },
});
