import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../../utils/color';
import {normalize} from '../../../utils/dimensions';
import {images} from '../../../utils/images';

const {width, height} = Dimensions.get('screen');
export default function AccountScreen() {
  const navigation = useNavigation<any>();
  const [coverimg, setCoverimg] = React.useState<any>();
  const [profileimage, setProfileimage] = React.useState<any>();
  const dispatch = useDispatch<any>();
  const {sports} = useSelector((store: any) => store.EditProfileReducer);
  console.log('yyyyyyy', sports);

  const imageOpencover = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
        height: 255,
        width: width,
      });
      setCoverimg(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };
  const imageOpenprofile = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
      });
      setProfileimage(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };
  const NavigateEdit = () => {
    navigation.navigate('Edit');
  };
  return (
    <SafeAreaView style={styles.parent}>
      <View>
        <TouchableOpacity onPress={imageOpencover}>
          <ImageBackground style={styles.backimg} source={images.account}>
            <Image style={styles.rectangleimg} source={{uri: coverimg}} />
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={imageOpenprofile}>
          <ImageBackground style={styles.profileBg} source={images.cover}>
            <Image style={styles.profileImg} source={{uri: profileimage}} />
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={NavigateEdit} style={styles.editview}>
          <Image style={styles.editimg} source={images.edit} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  backimg: {
    height: 255,
    width: width,
    resizeMode: 'contain',
  },
  rectangleimg: {
    width: normalize(375),
    height: normalize(248),
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
  },
  profileBg: {
    width: normalize(100),
    height: normalize(100),
    left: normalize(15),
    bottom: normalize(-50),
    resizeMode: 'contain',
    position: 'absolute',
    borderRadius: 5,
  },
  profileImg: {
    width: normalize(100),
    height: normalize(100),
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    position: 'absolute',
    borderRadius: normalize(5),
  },
  editview: {
    left: normalize(285),
    bottom: normalize(15),
  },
  editimg: {
    height: normalize(32),
    width: normalize(32),
    resizeMode: 'contain',
  },
});
