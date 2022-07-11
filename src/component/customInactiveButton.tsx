import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/color';

export default function CustomInActiveButton(props: any) {
  const {label, disabled} = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.customInactiveButtonTouchable}
        disabled={disabled}>
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
  customInactiveButtonTouchable: {
    backgroundColor: '#282828',
    width: normalize(325),
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: normalize(25),
  },
});
