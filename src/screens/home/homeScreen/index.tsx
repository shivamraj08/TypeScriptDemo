import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {images} from '../../../utils/images';
import {normalize} from '../../../utils/dimensions';
import COLOR from '../../../utils/color';
import {useDispatch, useSelector} from 'react-redux';
import {Video_Player_Api} from './action';
import Video from 'react-native-video';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

function HomeScreen() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch<any>();
  const [currIndex, setCurrindex] = React.useState<any>(0);
  const [h, setH] = React.useState<any>();
  const {verify_Otp_Data} = useSelector((store: any) => store.VerifyOtpReducer);
  const {Video_data} = useSelector((store: any) => store.HomeScreenReducer);
  let token = verify_Otp_Data.data.authToken;

  useEffect(() => {
    dispatch(
      Video_Player_Api(
        token,
        (response: any) => {
          if (response.data.statusCode == 200) {
          }
        },
        (errorApi: any) => {
          console.log('errrAt Vedio', errorApi);
        },
      ),
    );
  }, []);

  const _keyExtractor = (index: any) => index._id;
  const onLayout = (event: any) => {
    var {height} = event.nativeEvent.layout;
    isFocused && setH(height);
  };

  const onChangeIndex = ({index}: any) => {
    setCurrindex(index);
  };
  const _renderItem = ({item, index}: any) => {
    // console.log('====>item', item);
    return (
      <View style={[styles.renderContainer, {height: h}]}>
        <Video
          source={{uri: item?.contentUrl}}
          paused={!isFocused ? (currIndex == index ? false : true) : true}
          // controls
          // muted
          // pictureInPicture={true}
          style={styles.videoContainer}
        />
        <View style={styles.body}>
          <TouchableOpacity style={styles.squareTouchable}>
            <Image source={images.squareGroup} style={styles.screenShotImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.forwardTouchable}>
            <Image source={images.forward} style={styles.forwardImg} />
          </TouchableOpacity>
          <Text style={styles.textShareStyle}>{'Share'}</Text>
          <TouchableOpacity style={styles.saveTouchable}>
            <Image source={images.save} style={styles.forwardImg} />
          </TouchableOpacity>
          <Text style={styles.textSaveStyle}>{'Save'}</Text>
          <TouchableOpacity style={styles.starRateTouchable}>
            <Image source={images.fiveStar} style={styles.forwardImg} />
          </TouchableOpacity>
          <Text style={styles.textRateStyle}>{'Rate'}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container} onLayout={onLayout}>
      <SwiperFlatList
        data={Video_data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onChangeIndex={onChangeIndex}
        vertical={true}
      />
      <View style={styles.headerFiveView}>
        <Image source={images.fiveImg} style={styles.fiveImg} />
      </View>
    </View>
  );
}

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerFiveView: {
    alignSelf: 'center',
    position: 'absolute',
    top: normalize(70),
  },
  fiveImg: {
    width: normalize(103),
    height: normalize(25),
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  body: {
    marginTop: normalize(120),
    position: 'absolute',
  },
  screenShotImg: {
    height: normalize(30),
    width: normalize(30),
    resizeMode: 'contain',
  },
  squareTouchable: {
    left: normalize(322),
    top: normalize(50),
    width: normalize(30),
    position: 'absolute',
  },
  forwardTouchable: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(175),
    backgroundColor: '#18191A',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: normalize(310),
    borderColor: 'grey',
  },
  forwardImg: {
    height: normalize(17),
    width: normalize(21),
    resizeMode: 'contain',
    position: 'absolute',
    borderColor: 'red',
  },
  saveTouchable: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(25),
    backgroundColor: '#18191A',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    left: normalize(310),
  },
  starRateTouchable: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(335),
    backgroundColor: '#18191A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: normalize(310),
    position: 'absolute',
  },
  textShareStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(310),
    marginTop: normalize(220),
    fontSize: 12,
  },
  textSaveStyle: {
    color: COLOR.WHITE,
    position: 'absolute',
    marginLeft: normalize(315),
    marginTop: normalize(300),
    fontSize: 12,
  },
  textRateStyle: {
    color: COLOR.WHITE,
    position: 'absolute',
    marginLeft: normalize(316),
    marginTop: normalize(375),
    fontSize: 12,
  },
  renderContainer: {
    flex: 1,
  },
  videoContainer: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: height,
    width: width,
  },
});
