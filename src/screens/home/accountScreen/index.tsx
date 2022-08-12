import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';
import React, { useCallback } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../../utils/color';
import {normalize} from '../../../utils/dimensions';
import {images} from '../../../utils/images';
import { STRINGS } from '../../../utils/strings';
import moment from 'moment';

const {width, height} = Dimensions.get('screen');
export default function AccountScreen() {
  const navigation = useNavigation<any>();
  const [coverimg, setCoverimg] = React.useState<any>();
  const [profileimage, setProfileimage] = React.useState<any>();
  const dispatch = useDispatch<any>();
  const [textShown, setTextShown] = React.useState(false);
  const [lengthMore, setLengthMore] = React.useState(false);
  const {Complete_profile} = useSelector((store: any) => store.EditProfileReducer);
  const {verify_Otp_Data}=useSelector((store:any)=>store.VerifyOtpReducer)
  const [moreLength,setMoreLength] = React.useState<boolean>(false)

   let name=verify_Otp_Data?.data?.name
   let userName=verify_Otp_Data?.data?.username
   let updatedBio=Complete_profile?.data?.personalDetails?.bio
   let likedsport=Complete_profile?.data?.likedSport
   let updatedDob=Complete_profile?.data?.personalDetails?.dob
  
   let yrs = moment().diff(updatedDob, 'year');
   const BirthDate = moment(updatedDob).add(yrs, 'Y').format('YYYY-MM-DD');
   let days = moment().diff(BirthDate, 'days');
  
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
   
  const moreDetails = () => {
    setMoreLength(!moreLength)
  }
  return (
    <ScrollView style={styles.parent}>
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
      <Text onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 3} style={styles.updatedBioTextStyle}>
        {updatedBio}
      </Text>

      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.readMoreStyle}>
          {textShown ? 'less' : 'more'}
        </Text>
      ) : null}
      { moreLength && (
       <View style={{flexDirection: 'row'}}>
       <Text style={styles.bioText}>{'Sports | Watch'}</Text>
       <TouchableOpacity style={styles.addView}>
         <Image style={styles.addImg} source={images.addNew} />
       </TouchableOpacity>
       <Text style={{fontSize:16,color:'white'}}>{yrs + " yrs " + days+" days "}</Text>
     </View> )}
        {moreLength ? (
          <TouchableOpacity onPress={moreDetails}>
            <Image
              style={styles.moreLessStyle}
              source={images.lessImg}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={moreDetails}>
            <Image
              style={styles.moreLessStyle}
              source={images.moreImg}
            />
          </TouchableOpacity>
        )}
        
      </View>
    </SafeAreaView>
    </ScrollView>
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
    color:COLOR.BLUE
  },
  moreLessStyle:{
    width: normalize(355), 
    height: normalize(33),
  },
  addImg:{
    height:normalize(50),
    width:normalize(50),
    resizeMode:'contain'
  },
  addView:{
    left:normalize(180),
    bottom:normalize(15)
  }
});
