import {View, LogBox, Image, Animated, StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/images';
import {styles} from './style';
import { useSelector } from 'react-redux';

LogBox.ignoreAllLogs();
function SplashScreen(): any {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const {verify_Otp_Data} = useSelector(
    (store: any) => store.VerifyOtpReducer,
  );
console.log('splash',verify_Otp_Data);

  let token = verify_Otp_Data.data.authToken;
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimation]);
  const navigation = useNavigation<any>();
  setTimeout(() => {
    navigation.replace('SignInScreen');
     if (token) {
        navigation.navigate('Edit');
      } else {
        navigation.replace('SignIn');
      }
  }, 4000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image style={styles.splashManImg} source={images.splashMan} />
      <Image
        style={styles.backgroundImgSplash}
        source={images.backgroundSplash}
      />
      <View style={styles.fiveView}>
        <Image style={styles.fiveImgStyle} source={images.five} />
        <Animated.View
          style={[styles.faddingContainer, {opacity: fadeAnimation}]}>
          <Image style={styles.starImgStyle} source={images.star} />
        </Animated.View>
      </View>
    </View>
  );
}
export default SplashScreen;
