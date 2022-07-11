import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';

export default function SelectScreen(props: any) {
  const navigation = useNavigation();
  const [chooseIdentity, setChooseIdentity] = React.useState(
    'Select Your Identity',
  );
  const handleAthlete = () => {
    setChooseIdentity(STRINGS.LABEL.ATHLETE);
  };
  const handleFan = () => {
    setChooseIdentity(STRINGS.LABEL.FAN);
  };

  const navigateEditScreen = () => {
    navigation.navigate('EditProfile', chooseIdentity, setChooseIdentity);
  };

  const modalClosed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={modalClosed} activeOpacity={0.5}>
        <Image source={images.backarrow} style={styles.backArrImg} />
      </TouchableOpacity>
      <View>
        <Text style={styles.selectTextStyle}>{'Who are you?'}</Text>
      </View>
      <TouchableOpacity onPress={handleFan}>
        <Text style={styles.fanTextStyle}>{STRINGS.LABEL.FAN}</Text>
        <Image
          style={{
            ...styles.modalimage,
            borderWidth: chooseIdentity == 'FAN' ? 2 : 0,
            borderColor: COLOR.BLUE,
          }}
          source={images.fan}
        />
        {STRINGS.LABEL.FAN === chooseIdentity ? (
          <Image style={styles.rightCheck} source={images.check} />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAthlete}>
        <Image
          style={{
            ...styles.modalimage,
            borderWidth: chooseIdentity == 'ATHLETE' ? 2 : 0,
            borderColor: COLOR.BLUE,
          }}
          source={images.athlete}
        />
        {STRINGS.LABEL.ATHLETE === chooseIdentity ? (
          <Image style={styles.rightCheck} source={images.check} />
        ) : null}
      </TouchableOpacity>
      <View
        style={{flex: 1, flexDirection: 'column-reverse', marginBottom: 80}}>
        <TouchableOpacity
          onPress={navigateEditScreen}
          style={styles.NextButtonTouchable}>
          <Text style={styles.NextTextStyle}>{STRINGS.LABEL.NEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 'auto',
    borderTopWidth: 4,
    backgroundColor: COLOR.BLACK,
    alignItems: 'center',
  },
  selectTextStyle: {
    fontSize: 24,
    fontWeight: '900',
    marginTop: normalize(65),
    color: COLOR.WHITE,
    fontStyle: 'italic',
    right: normalize(90),
  },
  modalimage: {
    height: normalize(104),
    width: normalize(357),
    marginTop: normalize(20),
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 3,
  },
  backArrImg: {
    height: normalize(20),
    width: normalize(20),
    top: normalize(60),
    right: normalize(160),
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
  NextButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: normalize(340),
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: normalize(15),
  },
  NextTextStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
    marginBottom: normalize(25),
    top: normalize(10),
    fontStyle: 'italic',
  },
});