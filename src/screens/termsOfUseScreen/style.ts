import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BLACK,
    flex: 1,
  },
  backArrowStyle: {
    height: normalize(20),
    width: normalize(12),
  },
  headerTopView: {
    flexDirection: 'row',
    marginHorizontal: normalize(15),
    marginTop: normalize(70),
  },
  termsTextStyle: {
    fontSize: 24,
    width: normalize(194),
    height: normalize(25),
    color: COLOR.WHITE,
    fontWeight: '800',
    paddingHorizontal: normalize(15),
    bottom: normalize(5),
  },
  para1TextStyle: {
    height: normalize(240),
    width: normalize(328),
    color: COLOR.WHITE,
    paddingTop: 5,
    fontSize: 16,
    marginTop: normalize(34),
    fontFamily: 'Helvetica Neue',
  },
  para2TextStyle: {
    width: normalize(328),
    height: normalize(430),
    color: COLOR.WHITE,
    fontSize: 15,
  },
  paragraphView: {
    marginHorizontal: normalize(20),
  },
});
