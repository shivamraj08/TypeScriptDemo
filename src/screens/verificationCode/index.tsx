import {Text,View,Image,TouchableOpacity,SafeAreaView,TextInput,} from 'react-native';
import React, {useRef} from 'react';
import {images} from '../../utils/images';
import Modal from 'react-native-modal';
import CongratsModal from '../modals/congratsModal';
import { styles } from './style';
import { STRINGS } from '../../utils/strings';

export default function VerificationScreen({navigation}:any) {
  const first = useRef<any>(null);
  const second = useRef<any>(null);
  const third = useRef<any>(null);
  const fourth = useRef<any>(null);
  const [pin, setPin] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);

  const CongratsMsg = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={modalOpen}>
        <CongratsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image style={styles.backArrowStyle} source={images.backarrow} />
        </TouchableOpacity>
        <Text style={styles.verificationTextStyle}>
          {STRINGS.LABEL.VERIFICATION}
        </Text>
        <View>
          <Text style={styles.taglineStyle}>
            {'Kindly enter the 4 digit verification code sent to '}
          </Text>
        </View>
        <View style={styles.tagLineView}>
          <Text style={styles.numberTextStyle}>{'+17345678926'}</Text>
          <TouchableOpacity>
            <Text style={styles.editButtonStyle}>{STRINGS.LABEL.EDIT}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.txtinp}
            ref={first}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              second.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={second}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              third.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={third}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              fourth.current.focus();
            }}
          />
          <TextInput
            style={styles.txtinp}
            ref={fourth}
            maxLength={1}
            keyboardType={'number-pad'}
            onChangeText={text => {
              setPin(pin => text + pin);
              fourth.current.blur();
            }}
          />
        </View>
        {pin.length == 4 ? (
          <TouchableOpacity
            style={styles.SubmitButtonTouchable}
            onPress={CongratsMsg}>
            {<Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.SubmitButtonTouchableinactive}
            disabled={true}>
            {<Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>}
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.notReceivedTextStyle}>
            {"Didn't received the code yet?"}
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendButtonStyle}>
              {'Resend Verification Code'}
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
    </SafeAreaView>
  );
}


