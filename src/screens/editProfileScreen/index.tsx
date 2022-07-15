import React from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground, FlatList,} from 'react-native';
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
import {sportsApi} from './action';
import ZipCode from '../zipCodeScreen';

export default function EditProfileScreen() {
  const [coverimage, setCoverImage] = React.useState('');
  const [profileImage, setProfileImage] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('DOB(MM/DD/YYYY)');
  const [selectedIdentity, setSelectedIdentity] = React.useState(
    'Select Your Identity',
  );
  const [zipcode, setzipcode] = React.useState('');
  const [zipcodeModal, setZipcodeModal] = React.useState(false);
  // console.log('werty====>',zipcode)
  const [selectedSports, setSelectedSports] = React.useState([]);
  const {verify_Otp_Data} = useSelector((store: any) => store.VerifyOtpReducer);
  let usernameResult=verify_Otp_Data.data.username;
  const dispatch = useDispatch<any>();

  const params = useRoute<any>();
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    setSelectedIdentity(params.params);
    console.log(params.params);
  }, [navigation]);

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
      [date.getMonth() + 1, '/', date.getDate(), '/', date.getFullYear()].join(
        '',
      ),
    );
  };

  const calendarClosed = () => {
    setOpen(false);
  };

  const zipCallback = (zip: any) => {
    setzipcode(zip)
  }

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
          <ZipCode
            callback={zipCallback}
            setZipcodeModal={setZipcodeModal}
          />
        </Modal>
        <Text style={styles.header}>{STRINGS.LABEL.USER_TELL_US_HEADER}</Text>
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
          <CustomTextInput
            label={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
            placeholder={STRINGS.LABEL.CHANGE_YOUR_USERNAME}
            value={usernameResult}
            right={() => (
              <TouchableOpacity style={styles.edit}>
                <Image style={styles.editImageStyle} source={images.edit} />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.selectView}
            activeOpacity={0.5}
            onPress={identityOpen}>
            <Text style={styles.selectIdentityText}>{selectedIdentity}</Text>
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
          {/* <CustomTextInput label={STRINGS.LABEL.ZIPCODE} onPress={()=>{navigation.navigate('zipCodeScreen')}} /> */}
          <TouchableOpacity
            style={styles.identityView}
            onPress={() => {
              // navigation.navigate('zipCodeScreen',{zipcode:setzipcode});
              setZipcodeModal(!zipcodeModal,);
            }}>
            <Text style={styles.identityTxt}>
              {zipcode?.length <= 0 ? 'ZipCode*' : zipcode}
            </Text>
          </TouchableOpacity>
          <CustomTextInput label={STRINGS.LABEL.BIO} multiline={true} />
          <CustomTextInput label={STRINGS.LABEL.REFERRAL_CODE} />
          <TouchableOpacity
            style={styles.sportsView}
            onPress={() => {
              dispatch(sportsApi(verify_Otp_Data));
              navigation.navigate('SportScreen', {
                callback: (par: any) => {
                  setSelectedSports(par);
                },
              });
              console.log('selected Sports are here', setSelectedSports);
            }}>
              {selectedSports?.length <= 0
                ? <Text style={styles.identityTxt}>{'Sports I Watch'}</Text>
                : 
                selectedSports.map(element => {
                  return (
                    <View style={styles.elementTouchStyle}>
                      <Text style={styles.elementTextStyle}>
                        {element}
                      </Text>
                      <TouchableOpacity>
                        <Image
                          style={styles.crossImageStyle}
                          source={images.crossButton}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })
                 }
            <TouchableOpacity
            // onPress={()=>{navigation.navigate('SportScreen'),{selectedSports}}}
            >
                  { selectedSports.length>0 ?
                  <Text style={styles.addNewButtonStyle}>
                  {"+ Add New"}
                  </Text>:null}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <CustomButton label={STRINGS.LABEL.SUBMIT} />
    </SafeAreaView>
  );
}
