import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import {STRINGS} from '../../utils/strings';
import COLOR from '../../utils/color';
import {normalize} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';

export default function SelectScreen(props: any) {
  const navigation = useNavigation<any>();
  const [chooseIdentity, setChooseIdentity] = React.useState<any>(
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
        <Text style={styles.selectTextStyle}>{STRINGS.LABEL.WHO_ARE_YOU}</Text>
      </View>
      <TouchableOpacity onPress={handleFan} style={styles.touchableFan}>
        <Text style={styles.fanTextStyle}>{STRINGS.LABEL.FAN}</Text>
        <Image
          style={
            chooseIdentity === STRINGS.LABEL.FAN
              ? styles.modalimage
              : [styles.modalimage, {borderWidth: 0}]
          }
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
            borderWidth: chooseIdentity == STRINGS.LABEL.ATHLETE ? 2 : 0,
            borderColor: COLOR.BLUE,
          }}
          source={images.athlete}
        />
        {STRINGS.LABEL.ATHLETE === chooseIdentity ? (
          <Image style={styles.rightCheck} source={images.check} />
        ) : null}
      </TouchableOpacity>
      <View
        style={styles.NextButtonStyle}>
        {/* <TouchableOpacity
          onPress={navigateEditScreen}
          style={styles.NextButtonTouchable}>
          <Text style={styles.NextTextStyle}>{STRINGS.LABEL.NEXT}</Text>
        </TouchableOpacity> */}
        <CustomButton label={STRINGS.LABEL.NEXT} onPress={navigateEditScreen} />
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
    marginTop: normalize(85),
    color: COLOR.WHITE,
    fontStyle: 'italic',
    right: normalize(90),
  },
  modalimage: {
    height: normalize(104),
    width: normalize(357),
    marginVertical: normalize(10),
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLOR.BLUE,
  },
  backArrImg: {
    height: normalize(20),
    width: normalize(20),
    top: normalize(60),
    right: normalize(160),
    resizeMode: 'contain',
  },
  fanTextStyle: {
    height: normalize(27),
    width: normalize(59),
    position: 'absolute',
    fontSize: 28,
    fontWeight: '900',
    color: COLOR.WHITE,
    top: normalize(40),
    left: normalize(209),
    zIndex: 1,
    fontStyle: 'italic',
  },
  rightCheck: {
    height: normalize(20),
    width: normalize(20),
    bottom: normalize(102),
    resizeMode: 'contain',
    left: normalize(324),
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
  touchableFan: {
    height: normalize(104),
    width: normalize(357),
    marginVertical: normalize(20),
  },
  NextButtonStyle:{
    flex: 1,
    flexDirection: 'column-reverse',
    marginBottom: 80,
    width: '100%',
  }
});
