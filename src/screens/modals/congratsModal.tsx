import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import COLOR from '../../utils/color';
import {STRINGS} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../../utils/dimensions';

export default function CongratsModal(props: any) {
  const {setModalOpen, modalOpen} = props;
  const navigation = useNavigation();

  const modalClosed = () => {
    setModalOpen(!modalOpen);
    navigation.navigate('selectIdentity');
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbStyleView}>
        <Image source={images.like} style={styles.thumbImgStyle} />
      </View>
      <View style={styles.headerViewStyle}>
        <Text style={styles.congratstext}>{STRINGS.LABEL.CONGRATULATIONS}</Text>
      </View>
      <View style={styles.accountview}>
        <Text style={styles.registeredTextStyle}>
          {STRINGS.LABEL.ACCOUNT_SUCCESSFULLY}
        </Text>
      </View>
      <View style={styles.headerViewStyle}>
        <Text style={styles.registeredTextStyle}>
          {STRINGS.LABEL.REGISTERTED}
        </Text>
      </View>

      <TouchableOpacity style={styles.continueTouchable} onPress={modalClosed}>
        <Text style={styles.continueTextStyle}>{STRINGS.LABEL.CONTINUE}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.33,
    backgroundColor: '#121212',
    borderColor: COLOR.BLUE,
    borderWidth: 0.4,
    borderRadius: 10,
    borderTopWidth: 2,
    height:normalize(244),
    width:normalize(330)
  },
  thumbStyleView: {
    marginTop: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbImgStyle: {
    height: normalize(30),
    width: normalize(30),
  },
  headerViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(5),
  },
  congratstext: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontWeight: '900',
    marginTop: 10,
    width: '45%',
    height: normalize(24),
  },
  accountview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(12),
  },
  registeredTextStyle: {
    color: COLOR.WHITE,
    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  continueTouchable: {
    marginTop: normalize(15),
    backgroundColor: COLOR.BLUE,
    width: '85%',
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  continueTextStyle: {
    color: COLOR.BLACK,
    fontSize: 18,
    fontWeight: '800',
  },
});
