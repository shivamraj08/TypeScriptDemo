import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  body: {
    marginLeft: normalize(20),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(340),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
  },
  searchImgStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.WHITE,
  },
  sportTextHeader: {
    color: COLOR.WHITE,
    width: normalize(280),
    height: normalize(64),
    fontSize: 24,
    fontWeight: '900',
  },
  renderContainer: {
    marginHorizontal: normalize(5),
    width: normalize(104),
    height: normalize(112),
    marginTop: normalize(20),
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  sportsImg: {
    height: normalize(50),
    width: normalize(50),
    resizeMode: 'contain',
  },
  sportText: {
    color: COLOR.WHITE,
    marginTop: normalize(10),
  },
});
