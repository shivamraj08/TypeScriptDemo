import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import COLOR from '../../utils/color';

export default function ModalScreen(props: any) {
  const {openModal, setOpenModal, setSelectedIdentity} = props;

  const handleAthlete = () => {
    setSelectedIdentity(STRINGS.LABEL.ATHLETE);
    setOpenModal(!openModal);
  };
  const handleFan = () => {
    setSelectedIdentity(STRINGS.LABEL.FAN);
    setOpenModal(!openModal);
  };
  const modalClosed = () => {
    setOpenModal(!openModal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modalClosed} activeOpacity={0.5}>
        <Image source={images.cancel} style={styles.backArrImg} />
      </TouchableOpacity>
      <Text style={styles.selectTextStyle}>
        {STRINGS.LABEL.SELECT_IDENTITY}
      </Text>
      <TouchableOpacity onPress={handleFan}>
        <Image style={styles.modalimage} source={images.fan} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAthlete}>
        <Image style={styles.modalimage} source={images.athlete} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'flex-end',
    marginTop: 'auto',
    borderTopWidth: 2,
    borderColor: COLOR.BLUE,
    backgroundColor: COLOR.BLACK,
    alignItems: 'center',
  },
  selectTextStyle: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 70,
    color: COLOR.WHITE,
    fontStyle: 'italic',
  },
  modalimage: {
    height: 104,
    width: 357,
    marginTop: 20,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: COLOR.BLUE,
  },
  backArrImg: {
    height: 28,
    width: 28,
    top: 65,
    left: 155,
  },
});
