import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {images} from '../../utils/images';
import Modal from 'react-native-modal';
import CongratsModal from '../modals/congratsModal';
import {styles} from './style';
import {STRINGS} from '../../utils/strings';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Verify_Otp_Api from './action';
import CustomButton from '../../component/customButton';
import CustomInActiveButton from '../../component/customInactiveButton';
import CustomBackButton from '../../component/customBackButton';

export default function VerificationScreen() {
  const first = useRef<any>(null);
  const second = useRef<any>(null);
  const third = useRef<any>(null);
  const fourth = useRef<any>(null);
  const [pin, setPin] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const route = useRoute();
  // console.log('route', route.params);
  const dispatch = useDispatch<any>();
  const {sign_Up_Data} = useSelector((store: any) => store.SignUpReducer);
  console.log('sign_Up_Data', sign_Up_Data.userId);
  // console.log('otp =======>',verify_Otp_Data);

  const VerifyOtp_Api = () => {
    dispatch(Verify_Otp_Api(pin, sign_Up_Data.userId, sign_Up_Data.phoneNo));
    setModalOpen(!modalOpen);
  };

  const secondTextFocus = (text: any) => {
    setPin(pin + text);
    second?.current?.focus();
    if (text == '') {
      first?.current?.focus();
      setPin(pin.slice(0, 0));
    }
  };
  const thirdTextFocus = (text: any) => {
    setPin(pin + text);
    third?.current?.focus();
    if (text == '') {
      first?.current?.focus();
      setPin(pin.slice(0, 1));
    }
  };
  const fourthTextFocus = (text: any) => {
    setPin(pin + text);
    fourth?.current?.focus();
    if (text == '') {
      second?.current.focus();
      setPin(pin.slice(0, 2));
    }
  };
  4;
  const lastTextBlur = (text: any) => {
    setPin(pin + text);
    fourth?.current?.focus();
    if (text == '') {
      third?.current?.focus();
      setPin(pin.slice(0, 3));
    }
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={modalOpen}>
        <CongratsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <CustomBackButton />
      <View style={styles.body}>
        <Text style={styles.verificationTextStyle}>
          {STRINGS.LABEL.VERIFICATION}
        </Text>
        <View>
          <Text style={styles.taglineStyle}>
            {STRINGS.LABEL.ENTER_4_DIGIT_VERIFY_CODE}
          </Text>
        </View>
        <View style={styles.tagLineView}>
          <Text style={styles.numberTextStyle}>{route?.params?.PhoneNo}</Text>
          <TouchableOpacity>
            <Text style={styles.editButtonStyle}>{STRINGS.LABEL.EDIT}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInputStyle}
            ref={first}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={secondTextFocus}
          />
          <TextInput
            style={styles.textInputStyle}
            ref={second}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={thirdTextFocus}
          />
          <TextInput
            style={styles.textInputStyle}
            ref={third}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={fourthTextFocus}
          />
          <TextInput
            style={styles.textInputStyle}
            ref={fourth}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={lastTextBlur}
          />
        </View>
        {pin.length == 4 ? (
          <CustomButton label={STRINGS.LABEL.SUBMIT} onPress={VerifyOtp_Api} />
        ) : (
          <CustomInActiveButton label={STRINGS.LABEL.SUBMIT} disabled={true} />
        )}
        <View>
          <Text style={styles.notReceivedTextStyle}>
            {STRINGS.LABEL.DID_NOT_RECEIVE_CODE}
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendButtonStyle}>
              {STRINGS.LABEL.RESEND_VERIFY_CODE}
            </Text>
          </TouchableOpacity>
          <View>
            <View style={styles.bmxView}>
              <Image source={images.bmx} style={styles.bmxImg} />
            </View>
            <Image
              source={images.footerPattern}
              style={styles.footerImgStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
