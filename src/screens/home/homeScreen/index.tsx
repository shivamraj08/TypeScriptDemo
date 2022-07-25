import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {images} from '../../../utils/images';
import {normalize} from '../../../utils/dimensions';
import COLOR from '../../../utils/color';
import {useDispatch, useSelector} from 'react-redux';
import {Video_Player_Api} from './action';
import Video from 'react-native-video';

export default function HomeScreen() {
  const dispatch = useDispatch<any>();
  const {verify_Otp_Data} = useSelector((store: any) => store.VerifyOtpReducer);
  const {Video_data} = useSelector((store: any) => store.HomeScreenReducer);
  console.log('teeeeeeeee', Video_data);

  let token = verify_Otp_Data.data.authToken;
  console.log(token);

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

  const _keyExtractor = (item: any, index: any) => item.key;

  const _renderItem = (item: any) => {
    return (
      <View style={styles.renderContainer}>
        <Image source={images.five} style={styles.fiveImg} />
        <View style={styles.body}>
          <Video
            source={{uri: item?.item?.contentUrl, type: 'm3u8'}}
            playInBackground={false}
            paused={false}
            pictureInPicture={true}
            style={styles.videoContainer}
          />
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
    <View style={styles.container}>
      <FlatList
        data={Video_data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        pagingEnabled={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fiveImg: {
    width: normalize(103),
    height: normalize(25),
    alignSelf: 'center',
    marginTop: normalize(50),
  },
  body: {
    width: normalize(375),
    height: normalize(590),
    marginTop: normalize(10),
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
    backgroundColor: 'grey',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: normalize(30),
    position: 'absolute',
  },
  forwardImg: {
    height: normalize(17),
    width: normalize(21),
    resizeMode: 'contain',
  },
  saveTouchable: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(255),
    backgroundColor: 'grey',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: normalize(30),
    position: 'absolute',
  },
  starRateTouchable: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(335),
    backgroundColor: 'grey',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: normalize(30),
    position: 'absolute',
  },
  textShareStyle: {
    color: COLOR.WHITE,
    position: 'absolute',
    marginLeft: normalize(310),
    marginTop: normalize(210),
    fontSize: 12,
  },
  textSaveStyle: {
    color: COLOR.WHITE,
    position: 'absolute',
    marginLeft: normalize(310),
    marginTop: normalize(290),
    fontSize: 12,
  },
  textRateStyle: {
    color: COLOR.WHITE,
    position: 'absolute',
    marginLeft: normalize(315),
    marginTop: normalize(365),
    fontSize: 12,
  },
  renderContainer: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    zIndex: 1,
  },
  videoContainer: {
    height: normalize(1070),
    width: normalize(400),
    bottom: normalize(250),
  },
});
