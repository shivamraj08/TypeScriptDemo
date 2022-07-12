import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/color';

export default function CustomButton(props: any) {
  const {label, onPress} = props;
  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} style={styles.customButtonTouchable} onPress={onPress}>
        <Text style={styles.customButtonTextStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  customButtonTextStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: COLOR.BLACK,
    marginBottom: normalize(30),
    top: normalize(15),
    fontStyle: 'italic',
  },
  customButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: '93%',
    marginLeft: normalize(15),
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: normalize(10)
  },
});
