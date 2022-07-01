import React, {useState} from 'react';
import {Text,View,TouchableOpacity,Image,StatusBar,ImageBackground,} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import CustomTextInput from '../../component/customTextInput';
import {images} from '../../utils/images';
import ModalScreen from '../modals/ModalScreen';
import { styles } from './style';

export default function EditProfileScreen() {
  const [coverimage, setCoverImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('DOB(MM/DD/YYYY)');
  const [selectedIdentity, setSelectedIdentity] = useState(
    'Select Your Identity',
  );

  const calendarOpen = () => {
    setOpen(true);
  };
  const identityOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle="light-content" translucent={true} />
      <View style={styles.ModalViewStyle}>
        <Modal isVisible={openModal} style={{margin: 0,}}>
          <ModalScreen
            setSelectedIdentity={setSelectedIdentity}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </Modal>
        <Text style={styles.header}>
          {'Hi  John! \nTell us about yourself.'}
        </Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() =>
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
                })
            }>
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
            onPress={() =>
              ImagePicker.openPicker({cropping: true})
                .then(image => {
                  setProfileImage(image.path);
                })
                .catch(err => {
                  console.log('ImageErr', err);
                })
            }>
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
            label="Change your Username"
            placeholder="Change your Username"
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
            label={'Date of Birth'}
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
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setSelectedDate(
                      [
                        date.getMonth() + 1,
                        '/',
                        date.getDate(),
                        '/',
                        date.getFullYear(),
                      ].join(''),
                    );
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            )}
          />
          <CustomTextInput label="Zipcode" />
          <CustomTextInput label="Bio" multiline={true} />
          <CustomTextInput label="Referrel Code" />
          <CustomTextInput label="Sport Watch" multiline={true} />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <TouchableOpacity style={styles.SubmitButtonTouchable}>
          <Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
