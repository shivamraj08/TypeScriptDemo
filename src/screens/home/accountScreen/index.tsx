import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text
} from 'react-native';
import React, { useCallback } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../../utils/color';
import {normalize} from '../../../utils/dimensions';
import {images} from '../../../utils/images';
import { STRINGS } from '../../../utils/strings';


const {width, height} = Dimensions.get('screen');
export default function AccountScreen() {
  const navigation = useNavigation<any>();
  const [coverimg, setCoverimg] = React.useState<any>();
  const [profileimage, setProfileimage] = React.useState<any>();
  const dispatch = useDispatch<any>();
  const [textShown, setTextShown] = React.useState(false);
  const [lengthMore, setLengthMore] = React.useState(false);
  const {Complete_profile} = useSelector((store: any) => store.EditProfileReducer);
  console.log('yyyyyyy', Complete_profile);
   let name=Complete_profile.data.name
   let userName=Complete_profile.data.username
   let updatedBio=Complete_profile.data.personalDetails.bio

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
    navigation.navigate('EditProfile');
  };

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);
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
          <Image style={styles.editimg} source={images.edit_Grp} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerView}>
      <Text style={styles.nameTextStyle}>{name}</Text>
      <Text style={styles.userNameTextStyle}>{userName} </Text>
      <Image source={images.star_w_Rating} style={styles.ratingImg} resizeMode='contain' />
      <Image source={images.follower_Img} style={styles.followerStyle} />
      <Text style={styles.bioText}> {STRINGS.LABEL.BIO} </Text>
      {/* <Text 
      numberOfLines={3}
      style={styles.updatedBioTextStyle}>{updatedBio}</Text> */}
      <Text onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 3} style={styles.updatedBioTextStyle}>
        {updatedBio}
      </Text>

      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.readMoreStyle}>
          {textShown ? 'Read Less' : 'Read More'}
        </Text>
      ) : null}
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
    width: normalize(69),
    resizeMode: 'contain',
  },
  nameTextStyle:{
    color:'white',
    fontFamily:"Helvetica-BlackItalic",
    fontSize:14,
    paddingBottom:normalize(6)
  },
  userNameTextStyle:{
    color:'white',
    fontFamily:'Helvetica Neue'
  },
  innerView:{
    top:normalize(30),
    marginLeft:normalize(10),
  },
  ratingImg:{
    height:normalize(45),
    width:normalize(88),
    bottom:normalize(40),
    alignSelf:'flex-end',
  },
  followerStyle:{
    width:normalize(355),
    height:normalize(80),
    borderRadius:normalize(8),
    bottom:normalize(20)
  },
  bioText:{
    color:'grey',
    fontFamily:'Helvetica-BlackItalic',
    fontSize:16
  },
  updatedBioTextStyle:{
    color:'white',
    fontFamily:'Helvetica Neue',
    fontSize:14,
    fontStyle:'italic',
  },
  readMoreStyle:{
    color:'white'
  }
});
