import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashManImg: {
    height: '100%',
    width: '100%',
  },
  faddingContainer: {
    padding: normalize(20),
    backgroundColor: 'powderblue',
  },
  backgroundImgSplash: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  fiveView: {
    position: 'absolute',
    flexDirection: 'row',
    left: normalize(29),
    top: normalize(20),
    right: normalize(29),
  },
  fiveImgStyle: {
    height: normalize(80),
    width: normalize(360),
    marginTop: normalize(70),
    alignSelf: 'center',
  },
  starImgStyle: {
    height: normalize(80),
    width: normalize(110.89),
    top: normalize(50),
    right: normalize(187),
    resizeMode: 'cover',
  },
});
