import React, {useState} from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground,FlatList,} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../utils/images';
import ModalScreen from '../modals/ModalScreen';
import {styles} from './style';
import {STRINGS} from '../../utils/strings';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {checkUserNameAction, completeProfileAction, sportsApi} from './action';
import ZipCode from '../zipCodeScreen';
import {TextInput} from 'react-native-paper';
import COLOR from '../../utils/color';

export default function EditProfileScreen() {
  const [coverimage, setCoverImage] = React.useState('');
  const [profileImage, setProfileImage] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('DOB(MM/DD/YYYY)');
  const [selectedIdentity, setSelectedIdentity] = React.useState<any>('');
  const [error, setError] = useState<any>([]);
  const [zipcode, setzipcode] = React.useState('');
  const [zipcodeModal, setZipcodeModal] = React.useState(false);
  const [selectedsports, setSelectedsports] = React.useState([]);
  const [bio,setBio]=React.useState('')
  const {verify_Otp_Data} = useSelector((store: any) => store.VerifyOtpReducer);
  let usernameResult = verify_Otp_Data.data.username;
  const dispatch = useDispatch<any>();
  const params = useRoute<any>();
  const navigation = useNavigation<any>();
  const Name = verify_Otp_Data.data.name;
  let authToken = verify_Otp_Data.data.authToken;
  // const UserType=verify_Otp_Data.data.userType
  const UserName = verify_Otp_Data.data.username;
  const Id = verify_Otp_Data.data._id;
  const userId = React.useRef<any>();
  const [userNameResult, setUsernameResult] = React.useState(usernameResult);

  React.useEffect(() => {
    setSelectedIdentity(params.params);
  }, [navigation]);

  const completeProfileEvent = () => {
    navigation.navigate('BottomTab');
    dispatch(completeProfileAction(authToken, UserName, Id, zipcode, Name,bio));
  };
  const calendarOpen = () => {
    setOpen(true);
  };
  const identityOpen = () => {
    setOpenModal(!openModal);
  };
  const coverImagePicker = () =>
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('image path', image);
        setCoverImage(image.path);
      })
      .catch(err => {
        console.log('ImageErr', err);
      });

  const profileImagePicker = () => {
    ImagePicker.openPicker({cropping: true})
      .then(image => {
        setProfileImage(image.path);
      })
      .catch(err => {
        console.log('ImageErr', err);
      });
  };

  const onConfirmDate = (date: any) => {
    setOpen(false);
    setDate(date);
    setSelectedDate(
      [date.getMonth() + 1, '-', date.getDate(), '-', date.getFullYear()].join(
        '',
      ),
    );
  };

  const calendarClosed = () => {
    setOpen(false);
  };

  const zipCallback = (zip: any) => {
    setzipcode(zip);
  };

  const handleUserName = () => {
    userId?.current?.focus();
  };

  const onblur = () => {
    dispatch(
      checkUserNameAction(
        authToken,
        userNameResult,
        (response: any) => {
          if (response.data.statusCode == 200) {
          }
        },
        (errorApi: any) => {
          let suggest = errorApi.response.data.data.names;
          setError([...suggest]);
        },
      ),
    );
  };

  const onDelete = (index: any) => {
    selectedsports?.splice(index, 1);
    setSelectedsports([...selectedsports]);
  };

  const onSuggestedName = (item: any) => {
    setUsernameResult(item);
  };

  const Flatlist_header = () => {
    return (
      <View>
        <Text style={styles.alreadyUserName}>
          {STRINGS.ERROR_MSG.ALREADY_USER}
        </Text>
      </View>
    );
  };

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onSuggestedName(item);
        }}>
        <Text style={styles.validErrorStyle}>{item},</Text>
      </TouchableOpacity>
    );
  };

  const onZipCodePress = () => {
    dispatch(sportsApi(verify_Otp_Data));
    navigation.navigate('SportScreen', {
      callback: (par: any) => {
        setSelectedsports(par);
        // console.log('par is ', par.join());
        // if(!selectedsports.includes(par.join())){
        //   setSelectedsports([...selectedsports,...par]);
        // }
      },
      selectedsports: selectedsports,
    });
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ModalViewStyle}>
        <Modal isVisible={openModal} style={{margin: 0}}>
          <ModalScreen
            setSelectedIdentity={setSelectedIdentity}
            selectedIdentity={selectedIdentity}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </Modal>
        <Modal isVisible={zipcodeModal} style={styles.zipCodeStyleModal}>
          <ZipCode callback={zipCallback} setZipcodeModal={setZipcodeModal} />
        </Modal>
        <Text style={styles.header}>
          {'Hi ' + Name + '!\nTell us about yourself'}
        </Text>
      </View>
      <KeyboardAwareScrollView extraHeight={180}>
        <View style={styles.imgContainer}>
          <TouchableOpacity onPress={coverImagePicker}>
            <ImageBackground style={styles.imgCover} source={images.cover}>
              {coverimage.length > 0 && (
                <Image
                  style={styles.selectedCoverImage}
                  source={{uri: coverimage}}
                />
              )}
              <Image source={images.camera} style={styles.cameraImg} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableImagePickerStyle}
            onPress={profileImagePicker}>
            <ImageBackground style={styles.imgProfile} source={images.profile}>
              {profileImage.length > 0 && (
                <Image
                  style={styles.imgProfileSelected}
                  source={{uri: profileImage}}
                />
              )}
              <Image source={images.camera} style={styles.profileCameraImg} />
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.customTextView}>
          <View style={styles.userNameView}>
            <TextInput
              label={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
              ref={userId}
              activeOutlineColor={COLOR.WHITE}
              outlineColor={COLOR.WHITE}
              placeholder={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
              mode="outlined"
              autoCapitalize="none"
              value={userNameResult}
              onBlur={onblur}
              onChangeText={text => {
                setUsernameResult(text);
              }}
              theme={{
                colors: {
                  primary: COLOR.WHITE,
                  text: COLOR.BLUE,
                  placeholder: COLOR.WHITE,
                },
              }}
              style={styles.textInputStyle}
            />
            <TouchableOpacity style={styles.edit} onPress={handleUserName}>
              <Image style={styles.editImageStyle} source={images.editImage} />
            </TouchableOpacity>
          </View>
          {error?.length > 0 && <Flatlist_header />}
          {error?.length > 0 && (
            <View style={styles.userNameView}>
              <Text style={styles.suggestionText}>
                {STRINGS.LABEL.SUGGESTION}
              </Text>
              <FlatList data={error} renderItem={_renderItem} horizontal />
            </View>
          )}
          {/* <CustomTextInput
            ref={userId}
            label={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
            placeholder={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
            value={usernameResult}
            right={() => (
              <TouchableOpacity style={styles.edit} onPress={handleUserName}>
                <Image style={styles.editImageStyle} source={images.edit} />
              </TouchableOpacity>
            )}
          /> */}
          <TouchableOpacity
            style={styles.selectView}
            activeOpacity={0.5}
            onPress={identityOpen}>
            <Text style={styles.selectIdentityText}>
              {selectedIdentity || 'Select Your Identity'}
            </Text>
            <Image
              style={styles.RightArrowImageStyle}
              source={images.rightArrow}
            />
          </TouchableOpacity>
          <CustomTextInput
            label={STRINGS.LABEL.DOB}
            value={selectedDate}
            right={() => (
              <TouchableOpacity
                onPress={calendarOpen}
                style={styles.touchableCalendarStyle}>
                <Image
                  style={styles.calendarImageStyle}
                  source={images.calendar}
                />
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={onConfirmDate}
                  onCancel={calendarClosed}
                />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.identityView}
            onPress={() => {
              setZipcodeModal(!zipcodeModal);
            }}>
            <Text style={styles.identityTxt}>
              {zipcode?.length <= 0 ? 'ZipCode*' : zipcode}
            </Text>
          </TouchableOpacity>
          <CustomTextInput label={STRINGS.LABEL.BIO} multiline={true} 
           onChangeText={(text:any)=>{
            setBio(text);
           }}
          />
          <CustomTextInput label={STRINGS.LABEL.REFERRAL_CODE} />
          <TouchableOpacity style={styles.sportsView} onPress={onZipCodePress}>
            {selectedsports?.length <= 0 ? (
              <Text style={styles.identityTxt}>
                {STRINGS.LABEL.SPORT_WATCH}
              </Text>
            ) : (
              selectedsports.map(element => {
                return (
                  <View style={styles.elementTouchStyle}>
                    <Text style={styles.elementTextStyle}>{element}</Text>
                    <TouchableOpacity onPress={onDelete}>
                      <Image
                        style={styles.crossImageStyle}
                        source={images.crossButton}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
            <TouchableOpacity onPress={onZipCodePress}>
              {selectedsports.length > 0 ? (
                <Text style={styles.addNewButtonStyle}>
                  {STRINGS.LABEL.ADD_NEW}
                </Text>
              ) : null}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <CustomButton
        label={STRINGS.LABEL.SUBMIT}
        onPress={completeProfileEvent}
      />
    </SafeAreaView>
  );
}
