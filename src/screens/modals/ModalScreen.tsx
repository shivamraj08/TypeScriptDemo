import {StyleSheet, Text, View, Image, TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';


export default function ModalScreen(props: any) {
  const {openModal, setOpenModal, setSelectedIdentity, selectedIdentity} =
    props;

  const handleAthlete = () => {
    setSelectedIdentity(STRINGS.LABEL.ATHLETE);
    setTimeout(() => {
      setOpenModal(!openModal);
    }, 200);
  };
  const handleFan = () => {
    setSelectedIdentity(STRINGS.LABEL.FAN);
    setTimeout(() => {
      setOpenModal(!openModal);
    }, 200);
  };
  const modalClosed = () => {
    setOpenModal(!openModal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modalClosed} activeOpacity={0.5}>
        <Image source={images.cancel} style={styles.backArrImg} />
      </TouchableOpacity>
      <View>
        <Text style={styles.selectTextStyle}>
          {STRINGS.LABEL.SELECT_IDENTITY}
        </Text>
      </View>
      <TouchableOpacity onPress={handleFan}>
        <Text style={styles.fanTextStyle}>{STRINGS.LABEL.FAN}</Text>
        <Image
          style={{
            ...styles.modalimage,
            borderWidth: selectedIdentity == 'FAN' ? 2 : 0,
          }}
          source={images.fan}
        />
        {STRINGS.LABEL.FAN === selectedIdentity ? (
          <Image style={styles.rightCheck} source={images.check} />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAthlete}>
        <Image
          style={{
            ...styles.modalimage,
            borderWidth: selectedIdentity == 'ATHLETE' ? 2 : 0,
          }}
          source={images.athlete}
        />
        {STRINGS.LABEL.ATHLETE === selectedIdentity ? (
          <Image style={styles.rightCheck} source={images.check} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'flex-end',
    marginTop: 'auto',
    borderTopWidth: 4,
    borderColor: COLOR.BLUE,
    backgroundColor: COLOR.BLACK,
    alignItems: 'center',
    // bottom: normalize(20),
  },
  selectTextStyle: {
    fontSize: 24,
    fontWeight: '900',
    marginTop: normalize(65),
    color: COLOR.WHITE,
    fontStyle: 'italic',
    right: normalize(60),
  },
  modalimage: {
    height: normalize(104),
    width: normalize(360),
    marginTop: normalize(20),
    borderRadius: 5,
    borderColor: COLOR.BLUE,
  },
  backArrImg: {
    height: normalize(28),
    width: normalize(28),
    top: normalize(95),
    left: normalize(155),
  },
  fanTextStyle: {
    height: normalize(27),
    width: normalize(59),
    position: 'absolute',
    fontSize: 28,
    fontWeight: '900',
    color: COLOR.WHITE,
    top: normalize(60),
    left: normalize(195),
    zIndex: 1,
    fontStyle: 'italic',
  },
  rightCheck: {
    height: normalize(20),
    width: normalize(20),
    bottom: normalize(95),
    resizeMode: 'contain',
    left: normalize(335),
  },
});
